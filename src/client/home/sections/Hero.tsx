// src/client/components/home/Hero.tsx

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import GoldenWaves from "@/core/components/GoldenWaves";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[var(--color-bg-primary)]"
    >
      <GoldenWaves position="bottom" />
      <div className="absolute inset-x-0 top-0 -z-30 h-[400px] md:inset-0 md:h-full">
        <Image
          src="/hero-rafael-ramos.png"
          alt="Rafael Ramos, treinador e especialista em desenvolvimento humano"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] lg:object-right"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--color-bg-primary) 0%, color-mix(in srgb, var(--color-bg-primary) 98%, transparent) 14%, color-mix(in srgb, var(--color-bg-primary) 82%, transparent) 30%, color-mix(in srgb, var(--color-bg-primary) 15%, transparent) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg, color-mix(in srgb, var(--color-bg-primary) 25%, transparent) 0%, transparent 60%, var(--color-bg-primary) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-[-180px] top-[15%] -z-10 size-[480px] rounded-full blur-[140px]"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-info) 25%, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute right-[6%] top-[12%] -z-10 size-[280px] rounded-full blur-[110px]"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent) 14%, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-accent) 70%, transparent), transparent)",
        }}
      />

      <div className="z-10 mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-7xl items-center px-5 pb-16 pt-8 sm:px-8 md:py-16 lg:px-12 lg:py-24">
        <div className="w-full max-w-3xl lg:py-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 border px-4 py-2  text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)] backdrop-blur-sm"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--color-accent) 10%, transparent)",
              }}
            >
              <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />

              Experiência presencial
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
              Jornada da Transformação
            </span>
          </div>

          <h1 className="max-w-2xl pt-10 font-[Montserrat] text-[clamp(2rem,2vw,3rem)] lg:text-[clamp(2.5rem,3vw,3.5rem)]  font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-[var(--color-text-primary)]">
  Você sente que nasceu para{" "}
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(90deg, var(--color-accent-light), var(--color-accent), var(--color-accent-light))",
    }}
  >
    viver mais
  </span>
  ...
  <br />
  mas alguma coisa sempre faz você parar no mesmo lugar?
</h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-text-hero-muted)] sm:text-lg sm:leading-8">
            Você trabalha, luta, sonha e se esforça, mas parece que sempre
            existe algo impedindo seu próximo nível.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg sm:leading-8">
            Uma experiência criada para ajudar você a romper padrões de
            autossabotagem, desenvolver inteligência emocional e construir uma
            vida com mais clareza, equilíbrio e direção.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y py-5"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-accent) 22%, transparent)",
            }}
          >
            <div className="flex items-center gap-2.5 text-sm font-medium text-[var(--color-text-primary)] sm:text-base">
              <CalendarDays
                aria-hidden="true"
                className="size-5 text-[var(--color-accent)]"
              />

              <span>31 de julho</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm font-medium text-[var(--color-text-primary)] sm:text-base">
              <MapPin
                aria-hidden="true"
                className="size-5 text-[var(--color-accent)]"
              />

              <span>Nova Iguaçu – RJ</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#inscricao"
              className="group inline-flex min-h-14 items-center justify-center gap-3 px-7 py-4 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-[var(--color-bg-primary)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-light)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-primary)]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))",
                boxShadow:
                  "0 15px 45px color-mix(in srgb, var(--color-accent) 18%, transparent)",
              }}
            >
              Quero garantir minha vaga

              <ArrowRight
                aria-hidden="true"
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#jornada"
              className="inline-flex min-h-14 items-center justify-center border px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-text-primary)] backdrop-blur-sm transition duration-300 hover:border-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-primary)]"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--color-accent) 50%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--color-bg-primary) 35%, transparent)",
              }}
            >
              Conhecer a jornada
            </Link>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--color-text-muted)]">
            Desenvolvimento humano, inteligência emocional, comportamento e
            neurociência aplicada.
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, var(--color-bg-primary))",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute bottom-8 right-8 hidden items-center gap-3 lg:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
          Continue
        </span>

        <span
          className="h-px w-16"
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--color-accent), transparent)",
          }}
        />
      </div>
    </section>
  );
}