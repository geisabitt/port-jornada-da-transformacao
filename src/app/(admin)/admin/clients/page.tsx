// app/(admin)/admin/clients/page.tsx
'use client'

import { useState, useEffect, FormEvent } from 'react'

type Client = {
  id: string
  name: string
  email: string
  cpfCnpj?: string | null
  phone?: string | null
  asaasAccountId?: string | null
  asaasWalletId?: string | null
  createdAt: string
}

export default function AdminClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [loadingList, setLoadingList] = useState(true)
  const [status, setStatus] = useState<{ name: string; walletId: string | null } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function loadClients() {
    try {
      const res = await fetch('/api/clients')
      const data = await res.json()
      setClients(data.clients ?? [])
    } catch {
      // silencioso
    } finally {
      setLoadingList(false)
    }
  }

  useEffect(() => { loadClients() }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setStatus(null)
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      cpfCnpj: String(formData.get('cpfCnpj') || '').trim() || undefined,
      phone: String(formData.get('phone') || '').trim() || undefined,
    }

    if (!payload.name || !payload.email) {
      setError('Nome e email são obrigatórios.')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const body = await response.json().catch(() => null)

      if (!response.ok) {
        setError(body?.error || 'Erro ao criar cliente.')
        return
      }

      const client: Client = body.client
      setStatus({
        name: client.name,
        walletId: client.asaasWalletId ?? null,
      })

      event.currentTarget.reset()
      await loadClients()
    } catch {
      setError('Erro de conexão ao criar cliente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold">Clientes (Donos de Loja)</h1>
        <p className="text-sm text-slate-500">
          Cadastre o dono da loja para criar a subconta Asaas e habilitar o repasse automático de pagamentos.
        </p>
      </header>

      {/* Formulário de cadastro */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-base font-semibold text-slate-800">Novo cliente</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Nome
            <input
              name="name"
              type="text"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              name="email"
              type="email"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            CPF ou CNPJ
            <input
              name="cpfCnpj"
              type="text"
              placeholder="Somente números"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Telefone
            <input
              name="phone"
              type="tel"
              placeholder="Somente números"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
            />
          </label>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? 'Criando...' : 'Criar cliente'}
          </button>

          {/* Sucesso: mostra nome + walletId */}
          {status && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
              <p className="font-semibold text-emerald-700">✅ Cliente criado com sucesso!</p>
              <p className="mt-1 text-emerald-800">
                <span className="font-medium">Nome:</span> {status.name}
              </p>
              <p className="text-emerald-800">
                <span className="font-medium">Wallet ID:</span>{' '}
                {status.walletId ? (
                  <code className="rounded bg-emerald-100 px-1 py-0.5 font-mono text-xs">
                    {status.walletId}
                  </code>
                ) : (
                  <span className="text-amber-600">⚠️ Não retornado pelo Asaas — verifique o painel Asaas</span>
                )}
              </p>
              {status.walletId && (
                <p className="mt-2 text-xs text-emerald-600">
                  Copie este Wallet ID e adicione como <code className="font-mono">ASAAS_WALLET_ID</code> no .env deste cliente.
                </p>
              )}
            </div>
          )}

          {error && <p className="text-sm text-rose-600">{error}</p>}
        </div>
      </form>

      {/* Lista de clientes cadastrados */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-slate-800">Clientes cadastrados</h2>

        {loadingList ? (
          <p className="text-sm text-slate-400">Carregando...</p>
        ) : clients.length === 0 ? (
          <p className="text-sm text-slate-400">Nenhum cliente cadastrado ainda.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Nome</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Wallet ID</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {clients.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{c.name}</td>
                    <td className="px-4 py-3 text-slate-600">{c.email}</td>
                    <td className="px-4 py-3">
                      {c.asaasWalletId ? (
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-700">
                          {c.asaasWalletId}
                        </code>
                      ) : (
                        <span className="text-xs text-amber-500">⚠️ Sem wallet</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {c.asaasWalletId ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                          ✅ Pronto para receber
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                          ⚠️ Wallet pendente
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
