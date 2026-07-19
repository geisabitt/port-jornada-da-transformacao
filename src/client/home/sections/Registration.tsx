// src/client/home/sections/Registration.tsx

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react";

const includes = [
  "Acesso completo à Jornada da Transformação.",
  "Experiência 100% presencial.",
  "Conteúdo exclusivo com Rafael Ramos.",
  "Dinâmicas práticas durante o evento.",
  "Networking com participantes.",
  "Equipe de apoio durante toda a experiência.",
];

export default function Registration() {
  return (
    <section
      id="inscricao"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
            Garanta sua vaga
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--color-text-light)] lg:text-6xl">
            Sua transformação começa
            <span className="text-[var(--color-accent)]">
              {" "}com uma decisão.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-tertiary)]">
            As vagas são limitadas para garantir uma experiência de qualidade.
            Faça sua inscrição agora e reserve seu lugar.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 lg:p-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-bg-secondary)] px-4 py-2">
                <Ticket className="h-5 w-5 text-[var(--color-accent)]" />

                <span className="text-sm font-semibold text-[var(--color-accent)]">
                  Ingresso Individual
                </span>
              </div>

              <div className="mt-8 space-y-5">
                {includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" />

                    <span className="leading-7 text-[var(--color-text-secondary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
                <Users className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" />

                <p className="leading-7 text-[var(--color-text-tertiary)]">
                  Quanto antes você confirmar sua inscrição, maior a garantia de
                  disponibilidade de vaga.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-secondary)] p-8 text-center">
              <p className="text-sm uppercase tracking-[.18em] text-[var(--color-accent)]">
                Investimento
              </p>

              <p className="mt-6 text-4xl lg:text-6xl font-extrabold text-[var(--color-text-light)]">
                R$ 47,90 
              </p>

              <p className="mt-3 text-[var(--color-text-tertiary)]">
                por participante
              </p>

              <Link
                href="#"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-accent)] px-4 py-6 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
              >
                Quero garantir minha vaga

                <ArrowRight className="h-5 w-5" />
              </Link>

              <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[var(--color-text-tertiary)]">
                <ShieldCheck className="h-5 w-5 text-[var(--color-accent)]" />

                Compra segura
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}