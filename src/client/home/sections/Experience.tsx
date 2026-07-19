// src/client/home/sections/Experience.tsx

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CircleCheck,
  HeartHandshake,
  Lightbulb,
  MessageCircleHeart,
  Sparkles,
  Users,
} from "lucide-react";

const experiences = [
  {
    icon: Brain,
    title: "Conteúdo transformador",
    description:
      "Aprendizados sobre comportamento, emoções e decisões apresentados de forma clara e prática.",
  },
  {
    icon: Lightbulb,
    title: "Novas perspectivas",
    description:
      "Reflexões que ajudarão você a enxergar seus desafios e possibilidades de uma forma diferente.",
  },
  {
    icon: HeartHandshake,
    title: "Conexão verdadeira",
    description:
      "Um ambiente seguro para se conectar consigo, com sua história e com pessoas que também desejam evoluir.",
  },
  {
    icon: Sparkles,
    title: "Experiências marcantes",
    description:
      "Dinâmicas e momentos cuidadosamente preparados para gerar consciência e transformação.",
  },
  {
    icon: MessageCircleHeart,
    title: "Direcionamento prático",
    description:
      "Ferramentas que poderão ser utilizadas imediatamente na vida pessoal, familiar e profissional.",
  },
  {
    icon: Users,
    title: "Ambiente de crescimento",
    description:
      "Uma experiência coletiva capaz de fortalecer decisões, relacionamentos e novos comportamentos.",
  },
];

const journeySteps = [
  "Compreender como seus pensamentos influenciam suas emoções.",
  "Reconhecer padrões que impedem seu crescimento.",
  "Aprender a agir com mais consciência diante dos desafios.",
  "Fortalecer sua identidade, seus relacionamentos e seu propósito.",
];

export default function Experience() {
  return (
    <section
      id="jornada"
      className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent-light),transparent_35%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
            O que você viverá
          </span>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-[var(--color-text-light)] lg:text-5xl">
            Mais do que um evento.<br/>
            <span className="text-3xl lg:text-5xl text-[var(--color-accent)]">
              {" "}
              Uma experiência de transformação.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-tertiary)]">
            A Jornada foi construída para conduzir você por um processo de
            reflexão, aprendizado e ação. Cada momento foi pensado para gerar
            clareza e ajudar você a iniciar mudanças reais.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-secondary)]">
                <Icon className="h-7 w-7 text-[var(--color-accent)]" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[var(--color-text-light)]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-tertiary)]">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
              Durante a Jornada
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-text-light)] lg:text-5xl">
              Você será conduzido por um caminho de consciência e mudança.
            </h3>

            <p className="mt-6 text-lg leading-8 text-[var(--color-text-tertiary)]">
              A transformação começa quando você compreende o que precisa mudar
              e assume a responsabilidade de construir uma nova direção.
            </p>
          </div>

          <div className="space-y-5">
            {journeySteps.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5"
              >
                <CircleCheck className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" />

                <p className="leading-7 text-[var(--color-text-secondary)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold leading-relaxed text-[var(--color-text-light)]">
            Você pode sair da Jornada sendo a mesma pessoa.
          </p>

          <p className="mt-3 text-2xl font-bold text-[var(--color-accent)]">
            Mas não conseguirá enxergar sua vida da mesma forma.
          </p>

          <Link
            href="#inscricao"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
          >
            Quero viver essa experiência
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}