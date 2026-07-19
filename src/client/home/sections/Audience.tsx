// src/client/home/sections/Audience.tsx

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Heart,
  House,
  ShieldQuestion,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const audiences = [
  {
    icon: ShieldQuestion,
    title: "Sente que está perdido",
    description:
      "Você deseja mudar, mas ainda não consegue enxergar com clareza qual direção seguir.",
  },
  {
    icon: Heart,
    title: "Vive conflitos emocionais",
    description:
      "Suas emoções têm influenciado decisões, relacionamentos e comportamentos.",
  },
  {
    icon: Target,
    title: "Tem objetivos, mas não avança",
    description:
      "Você sabe o que deseja, porém continua preso aos mesmos padrões e dificuldades.",
  },
  {
    icon: House,
    title: "Quer fortalecer sua família",
    description:
      "Você deseja construir relacionamentos mais saudáveis, maduros e intencionais.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Busca crescimento profissional",
    description:
      "Você entende que sua mentalidade e suas decisões impactam diretamente seus resultados.",
  },
  {
    icon: Users,
    title: "Lidera ou influencia pessoas",
    description:
      "Você deseja desenvolver inteligência emocional para conduzir pessoas com mais segurança.",
  },
];

const confirmations = [
  "Está disposto a olhar para si com honestidade.",
  "Deseja romper comportamentos que limitam seu crescimento.",
  "Quer tomar decisões com mais consciência e segurança.",
  "Entende que transformação exige conhecimento e atitude.",
];

export default function Audience() {
  return (
    <section
      id="para-quem"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-accent-light),transparent_35%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
            Para quem é a Jornada
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--color-text-light)] lg:text-6xl">
            Essa experiência é para quem decidiu
            <span className="text-[var(--color-accent)]">
              {" "}
              não continuar vivendo da mesma forma.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-tertiary)]">
            A Jornada da Transformação foi criada para pessoas que reconhecem
            que precisam mudar, mas desejam clareza, ferramentas e direção para
            iniciar esse processo.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <Icon className="h-9 w-9 text-[var(--color-accent)]" />

              <h3 className="mt-5 text-xl font-semibold text-[var(--color-text-light)]">
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
            <Sparkles className="h-10 w-10 text-[var(--color-accent)]" />

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-text-light)] lg:text-5xl">
              A Jornada é para você que está pronto para assumir uma nova
              postura diante da vida.
            </h3>

            <p className="mt-6 text-lg leading-8 text-[var(--color-text-tertiary)]">
              Você não precisa ter todas as respostas. Precisa apenas estar
              disposto a compreender sua história, reconhecer seus padrões e
              construir um novo caminho.
            </p>
          </div>

          <div className="space-y-5">
            {confirmations.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--color-accent)]" />

                <p className="leading-7 text-[var(--color-text-secondary)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-card)] px-6 py-10 text-center sm:px-10">
          <p className="text-xl font-semibold leading-8 text-[var(--color-text-light)] lg:text-2xl">
            Você não precisa esperar que sua vida fique ainda mais difícil para
            decidir mudar.
          </p>

          <p className="mt-3 text-2xl font-bold text-[var(--color-accent)] lg:text-3xl">
            A transformação pode começar agora.
          </p>

          <Link
            href="#inscricao"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
          >
            Quero iniciar minha transformação
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}