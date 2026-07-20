import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type LeadRequest = {
  name?: string
  whatsapp?: string
  pageUrl?: string
  referrer?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
}

type GoogleScriptResponse = {
  success?: boolean
  message?: string
}

function sanitizeText(
  value: unknown,
  maxLength: number,
) {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().slice(0, maxLength)
}

function normalizeWhatsapp(value: unknown) {
  let numbers = sanitizeText(value, 30).replace(/\D/g, '')

  if (numbers.startsWith('55') && numbers.length > 11) {
    numbers = numbers.slice(2)
  }

  return numbers
}

export async function POST(request: Request) {
  try {
    const scriptUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL

    const webhookToken =
      process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN ?? ''

    if (!scriptUrl) {
      console.error(
        'GOOGLE_SHEETS_WEBHOOK_URL não configurada.',
      )

      return NextResponse.json(
        {
          message:
            'O formulário está temporariamente indisponível.',
        },
        {
          status: 500,
        },
      )
    }

    let body: LeadRequest

    try {
      body = (await request.json()) as LeadRequest
    } catch {
      return NextResponse.json(
        {
          message: 'Os dados enviados são inválidos.',
        },
        {
          status: 400,
        },
      )
    }

    const name = sanitizeText(body.name, 120)

    const whatsapp = normalizeWhatsapp(body.whatsapp)

    if (name.length < 3) {
      return NextResponse.json(
        {
          message: 'Digite um nome válido.',
        },
        {
          status: 400,
        },
      )
    }

    if (
      whatsapp.length < 10 ||
      whatsapp.length > 11
    ) {
      return NextResponse.json(
        {
          message:
            'Digite um WhatsApp válido com DDD.',
        },
        {
          status: 400,
        },
      )
    }

    const controller = new AbortController()

    const timeout = setTimeout(() => {
      controller.abort()
    }, 15000)

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',

        headers: {
          'Content-Type':
            'text/plain;charset=utf-8',
        },

        body: JSON.stringify({
          token: webhookToken,
          name,
          whatsapp,

          pageUrl: sanitizeText(
            body.pageUrl,
            500,
          ),

          referrer: sanitizeText(
            body.referrer,
            500,
          ),

          utmSource: sanitizeText(
            body.utmSource,
            150,
          ),

          utmMedium: sanitizeText(
            body.utmMedium,
            150,
          ),

          utmCampaign: sanitizeText(
            body.utmCampaign,
            150,
          ),

          utmContent: sanitizeText(
            body.utmContent,
            150,
          ),

          utmTerm: sanitizeText(
            body.utmTerm,
            150,
          ),

          submittedAt: new Date().toISOString(),
        }),

        cache: 'no-store',
        redirect: 'follow',
        signal: controller.signal,
      })

      const responseText = await response.text()

      console.log(
        'Google Apps Script status:',
        response.status,
      )

      console.log(
        'Google Apps Script resposta:',
        responseText,
      )

      let result: GoogleScriptResponse | null =
        null

      try {
        result = JSON.parse(
          responseText,
        ) as GoogleScriptResponse
      } catch {
        console.error(
          'A resposta do Apps Script não é JSON:',
          responseText,
        )
      }

      if (!response.ok) {
        return NextResponse.json(
          {
            message: `O Google Apps Script retornou o status ${response.status}.`,
          },
          {
            status: 502,
          },
        )
      }

      if (!result) {
        return NextResponse.json(
          {
            message:
              'O Google Apps Script retornou uma resposta inválida.',
          },
          {
            status: 502,
          },
        )
      }

      if (!result.success) {
        return NextResponse.json(
          {
            message:
              result.message ||
              'Não foi possível registrar sua inscrição.',
          },
          {
            status: 502,
          },
        )
      }

      return NextResponse.json({
        success: true,
      })
    } finally {
      clearTimeout(timeout)
    }
  } catch (error) {
    console.error(
      'Erro ao cadastrar lead:',
      error,
    )

    if (
      error instanceof Error &&
      error.name === 'AbortError'
    ) {
      return NextResponse.json(
        {
          message:
            'O Google Sheets demorou demais para responder.',
        },
        {
          status: 504,
        },
      )
    }

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : 'Não foi possível continuar.',
      },
      {
        status: 500,
      },
    )
  }
}