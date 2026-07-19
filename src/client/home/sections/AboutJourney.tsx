// src/client/home/sections/AboutJourney.tsx

import Image from "next/image";
import {
  Brain,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const topics = [
  "Identificar padrões que sabotam seu crescimento.",
  "Desenvolver inteligência emocional para enfrentar desafios.",
  "Fortalecer sua mentalidade diante das dificuldades.",
  "Tomar decisões com mais segurança.",
  "Construir hábitos alinhados aos seus objetivos.",
  "Desenvolver uma visão mais clara sobre propósito, família e futuro.",
];

const pillars = [
  {
    icon: Brain,
    title: "Neurociência",
    description: "Entenda como seu cérebro influencia suas decisões.",
  },
  {
    icon: HeartHandshake,
    title: "Inteligência Emocional",
    description: "Aprenda a controlar emoções em vez de ser controlado por elas.",
  },
  {
    icon: ShieldCheck,
    title: "Comportamento",
    description: "Substitua hábitos limitantes por atitudes que geram resultados.",
  },
  {
    icon: Target,
    title: "Propósito",
    description: "Tenha direção para construir uma vida mais intencional.",
  },
];

export default function AboutJourney() {
  return (
    <section
      id="evento"
      className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* IMAGEM */}

          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)]">
            <Image
              src="/evento-palco.png"
              alt="Jornada da Transformação"
              width={900}
              height={700}
              className="w-full object-cover"
            />
          </div>

          {/* TEXTO */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
              O Evento
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--color-text-light)] lg:text-6xl">
              O que é a{" "}
              <span className="text-[var(--color-accent)]">
                Jornada da Transformação?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--color-text-tertiary)]">
              A Jornada da Transformação é uma experiência presencial criada
              para ajudar pessoas comuns a romper padrões que limitam seu
              crescimento e desenvolver uma nova forma de pensar, sentir e agir.
            </p>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-tertiary)]">
              Você não encontrará apenas motivação. Encontrará ferramentas
              práticas para aplicar imediatamente na sua vida pessoal,
              profissional e familiar.
            </p>

            <div className="mt-10 space-y-5">

              {topics.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                  />

                  <span className="text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* METODOLOGIA */}

        <div className="mt-24 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 lg:p-12">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm uppercase tracking-[.2em] text-[var(--color-accent)]">
              Metodologia
            </span>

            <h3 className="mt-4 text-3xl font-bold text-[var(--color-text-light)] lg:text-5xl">
              Uma metodologia prática baseada em comportamento humano.
            </h3>

            <p className="mt-6 text-lg leading-8 text-[var(--color-text-tertiary)]">
              A transformação acontece quando conhecimento se transforma em
              ação. Durante a Jornada você aprenderá princípios que poderão ser
              aplicados imediatamente na sua rotina.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {pillars.map(({ icon: Icon, title, description }) => (

              <div
                key={title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition hover:border-[var(--color-accent)]"
              >

                <Icon className="h-9 w-9 text-[var(--color-accent)]" />

                <h4 className="mt-5 text-xl font-semibold text-[var(--color-text-light)]">
                  {title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[var(--color-text-tertiary)]">
                  {description}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-12 rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-secondary)] px-8 py-6 text-center">

            <TrendingUp className="mx-auto h-10 w-10 text-[var(--color-accent)]" />

            <p className="mt-5 text-xl font-semibold text-[var(--color-text-light)]">
              A verdadeira mudança não acontece quando você aprende algo novo.
            </p>

            <p className="mt-3 text-2xl font-bold text-[var(--color-accent)]">
              Ela acontece quando você muda a forma como pensa, sente e age.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}