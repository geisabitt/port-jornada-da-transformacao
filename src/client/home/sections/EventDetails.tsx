// src/client/home/sections/EventDetails.tsx

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const infos = [
  {
    icon: CalendarDays,
    title: "Data",
    value: "31 de Julho",
  },
  {
    icon: Clock3,
    title: "Horário",
    value: "19h",
  },
  {
    icon: MapPin,
    title: "Local",
    value: "Nova Iguaçu • RJ",
  },
];

const includes = [
  "Experiência presencial completa.",
  "Conteúdo exclusivo com Rafael Ramos.",
  "Momentos de reflexão e transformação.",
  "Networking com pessoas que buscam crescimento.",
];

export default function EventDetails() {
  return (
    <section
      id="evento"
      className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
            Reserve esta data
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--color-text-light)] lg:text-6xl">
            Seu próximo passo começa
            <span className="text-[var(--color-accent)]">
              {" "}aqui.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-tertiary)]">
            Uma noite preparada para provocar consciência, despertar propósito
            e iniciar uma transformação que continuará muito depois do evento.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {infos.map(({ icon: Icon, title, value }) => (
            <div
              key={title}
              className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 text-center transition hover:border-[var(--color-accent)]"
            >
              <Icon className="mx-auto h-10 w-10 text-[var(--color-accent)]" />

              <p className="mt-6 text-sm uppercase tracking-[.18em] text-[var(--color-accent)]">
                {title}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[var(--color-text-light)]">
                {value}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold text-[var(--color-text-light)] lg:text-5xl">
                O que está incluso na sua experiência?
              </h3>

              <p className="mt-6 text-lg leading-8 text-[var(--color-text-tertiary)]">
                Mais do que assistir uma palestra, você participará de uma
                experiência cuidadosamente preparada para gerar mudança real.
              </p>
            </div>

            <div className="space-y-5">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" />

                  <span className="text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#inscricao"
              className="inline-flex items-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
            >
              Garantir minha participação
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}