// src/client/home/sections/Transformation.tsx

import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  ArrowRight,
} from "lucide-react";
import GoldenWaves from "@/core/components/GoldenWaves";

const benefits = [
  {
    icon: Compass,
    title: "Mais clareza",
    description: "Entenda quem você é, onde está e para onde deseja ir.",
  },
  {
    icon: ShieldCheck,
    title: "Controle emocional",
    description: "Aprenda a responder aos desafios com equilíbrio e segurança.",
  },
  {
    icon: Brain,
    title: "Mentalidade fortalecida",
    description: "Substitua padrões limitantes por novos comportamentos.",
  },
  {
    icon: HeartHandshake,
    title: "Relacionamentos",
    description: "Construa conexões mais saudáveis dentro e fora da família.",
  },
  {
    icon: Target,
    title: "Propósito",
    description: "Tenha direção para tomar decisões alinhadas aos seus objetivos.",
  },
  {
    icon: Sparkles,
    title: "Transformação",
    description: "Pequenas mudanças internas geram grandes resultados externos.",
  },
];

export default function Transformation() {
  return (
    <section
      id="transformacao"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] py-20 lg:py-32"
    >
      <GoldenWaves position="top" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, color-mix(in srgb, var(--color-accent) 6%, transparent), transparent 45%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        {/* FOTO */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
            <Image
              src="/rafael-transformacao.png"
              alt="Rafael Ramos"
              width={700}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-card)]/90 p-6 backdrop-blur lg:block">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Experiência
            </p>

            <h3 className="mt-2 text-3xl font-bold text-[var(--color-text-light)]">
              17+ anos
            </h3>

            <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
              Desenvolvendo pessoas
            </p>
          </div>
        </div>

        {/* TEXTO */}
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Imagine como seria...
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--color-text-light)] lg:text-5xl">
            Viver com mais clareza,
            <span className="text-[var(--color-accent)]"> equilíbrio </span>
            e propósito.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[var(--color-text-tertiary)]">
            Imagine acordar todos os dias sabendo exatamente quem você é,
            para onde está indo e tomando decisões sem ser dominado pelo medo.
          </p>

          <p className="mt-5 text-lg leading-8 text-[var(--color-text-tertiary)]">
            Quando pensamento, emoção e comportamento caminham na mesma
            direção, sua vida inteira começa a mudar.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
              >
                <Icon className="mb-4 h-8 w-8 text-[var(--color-accent)]" />

                <h3 className="font-bold text-[var(--color-text-light)]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-12 border-l-4 border-[var(--color-accent)] pl-6">
            <p className="text-2xl font-semibold leading-relaxed text-[var(--color-text-light)]">
              Você não precisa se tornar outra pessoa.
            </p>

            <p className="mt-3 text-lg text-[var(--color-accent)]">
              Você precisa descobrir a melhor versão de quem já é.
            </p>
          </blockquote>

          <Link
            href="#inscricao"
            className="mt-12 inline-flex items-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
          >
            Quero viver essa experiência
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}