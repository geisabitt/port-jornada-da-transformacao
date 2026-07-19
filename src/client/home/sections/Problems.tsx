// src/client/home/sections/Problems.tsx

import {
  BatteryLow,
  BriefcaseBusiness,
  CirclePause,
  Clock3,
  HeartHandshake,
  ShieldAlert,
  Target,
  TrendingUp,
} from "lucide-react";

const problems = [
  {
    icon: Target,
    title: "Você começa projetos com entusiasmo",
    description:
      "Mas, depois de algum tempo, perde a constância e não consegue concluir o que começou.",
  },
  {
    icon: BatteryLow,
    title: "Vive cansado emocionalmente",
    description:
      "Mesmo quando descansa, sente que sua mente continua sobrecarregada.",
  },
  {
    icon: ShieldAlert,
    title: "Carrega preocupações que roubam sua paz",
    description:
      "Pensamentos constantes dificultam sua concentração e seu equilíbrio emocional.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Trabalha muito, mas sente que poderia conquistar mais",
    description:
      "Você se esforça diariamente, porém seus resultados ainda parecem abaixo do seu potencial.",
  },
  {
    icon: Clock3,
    title: "Adia decisões importantes",
    description:
      "O medo, a insegurança e o excesso de dúvidas impedem você de avançar.",
  },
  {
    icon: HeartHandshake,
    title: "Sente culpa em relação à família",
    description:
      "Você deseja crescer profissionalmente sem abrir mão das pessoas que ama.",
  },
  {
    icon: CirclePause,
    title: "O medo de errar impede você de agir",
    description:
      "Você pensa demais, tenta prever todos os riscos e acaba permanecendo no mesmo lugar.",
  },
  {
    icon: TrendingUp,
    title: "Sente que está apenas sobrevivendo",
    description:
      "Enquanto, no fundo, sabe que nasceu para construir uma vida com mais propósito e direção.",
  },
];

export default function Problems() {
  return (
    <section
      id="problema"
      className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-40 size-[420px] rounded-full bg-[var(--color-info)]/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-20 size-[420px] rounded-full bg-[var(--color-accent)]/10 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent)] sm:text-sm">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            Reconheça os padrões
            <span className="h-px w-8 bg-[var(--color-accent)]" />
          </span>

          <h2 className="mt-6 text-balance text-3xl font-extrabold uppercase leading-tight tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-4xl lg:text-6xl">
            Talvez o problema nunca tenha sido a{" "}
            <span className="text-[var(--color-accent)]">
              falta de capacidade.
            </span>
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-2 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg sm:leading-8">
            <p>Você sabe que tem potencial.</p>
            <p>As pessoas reconhecem isso.</p>
            <p>Você sonha grande.</p>
          </div>

          <p className="mt-6 text-lg font-semibold text-[var(--color-text-primary)] sm:text-xl">
            Mas, mesmo assim, alguma coisa parece impedir você de avançar.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
          {problems.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden border border-[var(--color-border)]/70 bg-[var(--color-bg-card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/70 hover:bg-[var(--color-bg-hover)] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute right-4 top-3 text-5xl font-black text-[var(--color-accent)]/5"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex size-12 items-center justify-center border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition duration-300 group-hover:border-[var(--color-accent)]/60 group-hover:bg-[var(--color-accent)]/15">
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.7} />
              </div>

              <h3 className="mt-6 text-lg font-bold leading-snug text-[var(--color-text-primary)]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-text-tertiary)]">
                {description}
              </p>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full"
              />
            </article>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden border border-[var(--color-accent)]/30 bg-[var(--color-bg-primary)] px-6 py-10 text-center sm:px-10 sm:py-12 lg:mt-20 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-accent-light)] to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/5 blur-[90px]"
          />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              A verdadeira mudança
            </p>

            <h3 className="mt-5 text-balance text-2xl font-extrabold uppercase leading-tight text-[var(--color-text-primary)] sm:text-3xl lg:text-5xl">
              A maioria das pessoas tenta mudar de vida mudando apenas as
              circunstâncias.
            </h3>

            <p className="mt-7 text-balance text-xl font-semibold leading-relaxed text-[var(--color-text-hero-muted)] sm:text-2xl lg:text-3xl">
              Mas os resultados só mudam quando os{" "}
              <span className="text-[var(--color-accent-light)]">
                comportamentos também mudam.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}