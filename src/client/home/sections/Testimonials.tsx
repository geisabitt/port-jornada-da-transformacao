// src/client/home/sections/Testimonials.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Nome do participante",
    role: "Participante da Jornada",
    image: "/rafael-transformacao.png",
    testimonial:
      "Adicione aqui o depoimento real do participante contando como a experiência impactou sua vida, suas decisões e seus relacionamentos.",
  },
  {
    name: "Nome do participante",
    role: "Participante da Jornada",
    image: "/rafael-transformacao.png",
    testimonial:
      "Adicione aqui um depoimento real destacando as mudanças percebidas depois do evento e os aprendizados aplicados na rotina.",
  },
  {
    name: "Nome do participante",
    role: "Participante da Jornada",
    image: "/rafael-transformacao.png",
    testimonial:
      "Adicione aqui um depoimento real sobre a clareza, o direcionamento e a transformação vividos durante a Jornada.",
  },
];

const results = [
  {
    value: "Clareza",
    description: "Para tomar decisões mais conscientes.",
  },
  {
    value: "Coragem",
    description: "Para romper padrões e iniciar mudanças.",
  },
  {
    value: "Direção",
    description: "Para construir uma vida com propósito.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-light),transparent_35%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
            Histórias de transformação
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--color-text-light)] lg:text-6xl">
            Pessoas reais que decidiram
            <span className="text-[var(--color-accent)]">
              {" "}
              viver uma nova história.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-tertiary)]">
            Cada transformação começa com uma decisão. Conheça histórias de
            pessoas que escolheram olhar para si, romper padrões e construir uma
            nova direção.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ name, role, image, testimonial }) => (
            <article
              key={image}
              className="relative flex h-full flex-col rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[var(--color-accent)] opacity-20" />

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
                  />
                ))}
              </div>

              <blockquote className="mt-8 flex-1">
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  “{testimonial}”
                </p>
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-[var(--color-border)] pt-6">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-bg-secondary)]">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--color-text-light)]">
                    {name}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
                    {role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto h-10 w-10 text-[var(--color-accent)]" />

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-text-light)] lg:text-5xl">
              A próxima história de transformação pode ser a sua.
            </h3>

            <p className="mt-6 text-lg leading-8 text-[var(--color-text-tertiary)]">
              Você não controla tudo o que aconteceu até aqui, mas pode decidir
              como deseja construir os próximos capítulos da sua vida.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {results.map(({ value, description }) => (
              <div
                key={value}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 text-center"
              >
                <p className="text-2xl font-bold text-[var(--color-accent)]">
                  {value}
                </p>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-tertiary)]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#inscricao"
              className="inline-flex items-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
            >
              Quero escrever uma nova história
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}