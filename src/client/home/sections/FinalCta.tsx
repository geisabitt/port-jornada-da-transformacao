// src/client/home/sections/FinalCta.tsx

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-light),transparent_42%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-card)]">
          <div className="px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-secondary)]">
              <Sparkles className="h-8 w-8 text-[var(--color-accent)]" />
            </div>

            <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
              A decisão é sua
            </span>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-[var(--color-text-light)] lg:text-6xl">
              Você pode continuar vivendo da mesma forma ou
              <span className="text-[var(--color-accent)]">
                {" "}
                começar uma nova história.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-tertiary)]">
              A Jornada da Transformação é um convite para olhar para dentro,
              romper padrões e assumir o protagonismo da vida que você deseja
              construir.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-4">
                <CalendarDays className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />

                <span className="font-semibold text-[var(--color-text-secondary)]">
                  31 de Julho
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-4">
                <Clock3 className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />

                <span className="font-semibold text-[var(--color-text-secondary)]">
                  19h
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-4">
                <MapPin className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />

                <span className="font-semibold text-[var(--color-text-secondary)]">
                  Nova Iguaçu – RJ
                </span>
              </div>
            </div>

            <Link
              href="#inscricao"
              className="mt-12 inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
            >
              Quero garantir minha vaga
              <ArrowRight className="h-5 w-5" />
            </Link>

            <p className="mt-6 text-sm text-[var(--color-text-muted)]">
              Vagas limitadas para a experiência presencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}