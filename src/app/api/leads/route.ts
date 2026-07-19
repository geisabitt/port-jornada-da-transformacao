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

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().slice(0, maxLength)
}

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    const webhookToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN

    if (!scriptUrl || !webhookToken) {
      console.error('Google Sheets webhook não configurado.')

      return NextResponse.json(
        {
          message: 'O formulário está temporariamente indisponível.',
        },
        {
          status: 500,
        },
      )
    }

    const body = (await request.json()) as LeadRequest

    const name = sanitizeText(body.name, 120)
    const whatsapp = sanitizeText(body.whatsapp, 20).replace(/\D/g, '')

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

    if (whatsapp.length < 10 || whatsapp.length > 11) {
      return NextResponse.json(
        {
          message: 'Digite um WhatsApp válido com DDD.',
        },
        {
          status: 400,
        },
      )
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        token: webhookToken,
        name,
        whatsapp,
        pageUrl: sanitizeText(body.pageUrl, 500),
        referrer: sanitizeText(body.referrer, 500),
        utmSource: sanitizeText(body.utmSource, 150),
        utmMedium: sanitizeText(body.utmMedium, 150),
        utmCampaign: sanitizeText(body.utmCampaign, 150),
        utmContent: sanitizeText(body.utmContent, 150),
        utmTerm: sanitizeText(body.utmTerm, 150),
        submittedAt: new Date().toISOString(),
      }),
      cache: 'no-store',
    })

    const result = await response.json().catch(() => null)

    if (!response.ok || !result?.success) {
      console.error('Erro no Google Apps Script:', result)

      return NextResponse.json(
        {
          message: 'Não foi possível registrar sua inscrição.',
        },
        {
          status: 502,
        },
      )
    }

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error('Erro ao cadastrar lead:', error)

    return NextResponse.json(
      {
        message: 'Não foi possível continuar. Tente novamente.',
      },
      {
        status: 500,
      },
    )
  }
}