// src/client/components/LeadCheckoutModal.tsx
'use client'

import { FormEvent, useEffect, useState } from 'react'
import { ArrowRight, Loader2, LockKeyhole, X } from 'lucide-react'

type LeadCheckoutModalProps = {
  checkoutUrl: string
  buttonText?: string
  buttonClassName?: string
}

function formatWhatsapp(value: string) {
  const numbers = value.replace(/\D/g, '').slice(0, 11)

  if (numbers.length <= 2) {
    return numbers
  }

  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  }

  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
}

export default function LeadCheckoutModal({
  checkoutUrl,
  buttonText = 'Quero garantir minha vaga',
  buttonClassName,
}: LeadCheckoutModalProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !loading) {
        setOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [open, loading])

  function closeModal() {
    if (loading) {
      return
    }

    setOpen(false)
    setError('')
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const cleanName = name.trim()
    const cleanWhatsapp = whatsapp.replace(/\D/g, '')

    if (cleanName.length < 3) {
      setError('Digite seu nome completo.')
      return
    }

    if (cleanWhatsapp.length < 10 || cleanWhatsapp.length > 11) {
      setError('Digite um WhatsApp válido com DDD.')
      return
    }

    if (!accepted) {
      setError('Você precisa autorizar o contato pelo WhatsApp.')
      return
    }

    if (!checkoutUrl) {
      setError('O link do checkout ainda não foi configurado.')
      return
    }

    try {
      setLoading(true)

      const searchParams = new URLSearchParams(window.location.search)

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: cleanName,
          whatsapp: cleanWhatsapp,
          pageUrl: window.location.href,
          referrer: document.referrer,
          utmSource: searchParams.get('utm_source') ?? '',
          utmMedium: searchParams.get('utm_medium') ?? '',
          utmCampaign: searchParams.get('utm_campaign') ?? '',
          utmContent: searchParams.get('utm_content') ?? '',
          utmTerm: searchParams.get('utm_term') ?? '',
        }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(data?.message || 'Não foi possível salvar seus dados.')
      }

      window.location.assign(checkoutUrl)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Não foi possível continuar. Tente novamente.',
      )

      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          buttonClassName ??
          'inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]'
        }
      >
        {buttonText}
        <ArrowRight className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal()
            }
          }}
        >
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              disabled={loading}
              aria-label="Fechar formulário"
              className="absolute right-5 top-5 z-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-2 text-[var(--color-text-secondary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="border-b border-[var(--color-border)] px-6 pb-5 pt-5 sm:px-4">
              <span className="text-sm font-semibold uppercase tracking-[.18em] text-[var(--color-accent)]">
                Último passo
              </span>

              <h2
                id="lead-modal-title"
                className="mt-3 pr-10 text-2xl font-bold leading-tight text-[var(--color-text-light)]"
              >
                Para quem podemos reservar esta vaga?
              </h2>

              <p className="text-sm mt-4 leading-7 text-[var(--color-text-tertiary)]">
                Preencha seus dados para continuar para o checkout seguro da
                Cacto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-8">
              <div>
                <label
                  htmlFor="lead-name"
                  className="mb-2 block text-sm font-semibold text-[var(--color-text-secondary)]"
                >
                  Nome completo
                </label>

                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Digite seu nome"
                  disabled={loading}
                  className="h-14 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="lead-whatsapp"
                  className="mb-2 block text-sm font-semibold text-[var(--color-text-secondary)]"
                >
                  WhatsApp com DDD
                </label>

                <input
                  id="lead-whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={whatsapp}
                  onChange={(event) =>
                    setWhatsapp(formatWhatsapp(event.target.value))
                  }
                  placeholder="(21) 99999-9999"
                  disabled={loading}
                  className="h-14 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(event) => setAccepted(event.target.checked)}
                  disabled={loading}
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
                />

                <span className="text-sm leading-6 text-[var(--color-text-tertiary)]">
                  Autorizo o contato da equipe da Jornada pelo WhatsApp sobre
                  minha inscrição.
                </span>
              </label>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-[var(--color-error)]/30 bg-[var(--color-error)]/10 px-4 py-3 text-sm text-[var(--color-error)]"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-accent)] px-6 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    Continuar para o pagamento
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-text-muted)]">
                <LockKeyhole className="h-4 w-4 text-[var(--color-accent)]" />
                Seus dados serão utilizados apenas para sua inscrição.
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}