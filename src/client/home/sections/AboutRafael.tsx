// src/client/home/sections/AboutRafael.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  HeartHandshake,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "17+ anos de experiência",
    description:
      "Uma trajetória dedicada ao desenvolvimento humano e à transformação de vidas.",
  },
  {
    icon: Users,
    title: "Milhares de pessoas impactadas",
    description:
      "Experiências, treinamentos e encontros que despertam mudanças reais.",
  },
  {
    icon: Brain,
    title: "Conhecimento aplicado",
    description:
      "Neurociência, inteligência emocional e comportamento transformados em prática.",
  },
  {
    icon: HeartHandshake,
    title: "Transformação humanizada",
    description:
      "Uma abordagem próxima, acolhedora e conectada com os desafios da vida real.",
  },
];

const credentials = [
  "Especialista em desenvolvimento humano.",
  "Mentor de pessoas, líderes e famílias.",
  "Experiência com inteligência emocional e comportamento.",
  "Criador da Jornada da Transformação.",
];

export default function AboutRafael() {
  return (
    <section
      id="rafael-ramos"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-light),transparent_35%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* TEXTO */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
              Quem conduzirá essa jornada
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--color-text-light)] lg:text-6xl">
              Conheça{" "}
              <span className="text-[var(--color-accent)]">
                Rafael Ramos
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--color-text-tertiary)]">
              Rafael Ramos dedica sua trajetória ao desenvolvimento de pessoas,
              ajudando homens, mulheres, líderes e famílias a compreenderem suas
              emoções, romperem padrões limitantes e construírem uma vida com
              mais clareza e propósito.
            </p>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-tertiary)]">
              Sua abordagem une conhecimento sobre comportamento humano,
              inteligência emocional, experiências práticas e princípios que
              podem ser aplicados nas decisões do dia a dia.
            </p>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-tertiary)]">
              Durante a Jornada da Transformação, você não encontrará alguém
              distante no palco. Encontrará um mentor disposto a compartilhar
              ferramentas, experiências e direcionamentos capazes de provocar
              uma mudança verdadeira.
            </p>

            <div className="mt-10 space-y-5">
              {credentials.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />

                  <span className="text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 border-l-4 border-[var(--color-accent)] pl-6">
              <p className="text-xl font-semibold leading-8 text-[var(--color-text-light)]">
                “Transformação não é sobre se tornar alguém diferente. É sobre
                despertar a pessoa que você nasceu para ser.”
              </p>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[.18em] text-[var(--color-accent)]">
                Rafael Ramos
              </p>
            </blockquote>

            <Link
              href="#inscricao"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
            >
              Quero participar da Jornada
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* IMAGEM */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <Image
                src="/rafael-transformacao.png"
                alt="Rafael Ramos, mentor da Jornada da Transformação"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 grid grid-cols-2 gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/95 p-4 backdrop-blur sm:left-8 sm:right-8 sm:gap-4 sm:p-6">
              <div>
                <p className="text-2xl font-bold text-[var(--color-accent)] sm:text-3xl">
                  17+
                </p>

                <p className="mt-1 text-xs leading-5 text-[var(--color-text-tertiary)] sm:text-sm">
                  Anos desenvolvendo pessoas
                </p>
              </div>

              <div className="border-l border-[var(--color-border)] pl-4 sm:pl-6">
                <p className="text-2xl font-bold text-[var(--color-accent)] sm:text-3xl">
                  Vidas
                </p>

                <p className="mt-1 text-xs leading-5 text-[var(--color-text-tertiary)] sm:text-sm">
                  Impactadas pela transformação
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESTAQUES */}

        <div className="mt-28 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
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
      </div>
    </section>
  );
}