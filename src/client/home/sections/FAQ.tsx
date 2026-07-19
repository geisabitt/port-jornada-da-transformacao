// src/client/home/sections/FAQ.tsx

import Link from "next/link";
import {
  ArrowRight,
  CircleHelp,
  Clock3,
  MapPin,
  Ticket,
  Users,
} from "lucide-react";

const questions = [
  {
    icon: Ticket,
    question: "O que está incluso no ingresso?",
    answer:
      "O ingresso dá acesso completo à Jornada da Transformação, aos conteúdos, dinâmicas e experiências conduzidas durante o evento.",
  },
  {
    icon: MapPin,
    question: "Onde será realizado o evento?",
    answer:
      "A Jornada da Transformação será realizada presencialmente em Nova Iguaçu, no Rio de Janeiro. O endereço completo será enviado aos participantes confirmados.",
  },
  {
    icon: Clock3,
    question: "Qual é a data e o horário?",
    answer:
      "O evento acontecerá no dia 31 de julho, às 19h. Recomendamos chegar com antecedência para realizar o credenciamento com tranquilidade.",
  },
  {
    icon: Users,
    question: "Preciso ter participado de outro evento antes?",
    answer:
      "Não. A Jornada foi preparada para receber tanto pessoas que estão iniciando seu processo de desenvolvimento quanto aquelas que já buscam crescimento pessoal.",
  },
  {
    icon: CircleHelp,
    question: "A Jornada é uma palestra motivacional?",
    answer:
      "Não. A experiência combina reflexões, conhecimento sobre comportamento humano, inteligência emocional e ferramentas práticas para aplicação na vida real.",
  },
  {
    icon: Ticket,
    question: "Posso transferir meu ingresso para outra pessoa?",
    answer:
      "A possibilidade de transferência dependerá das regras da organização. Entre em contato com a equipe antes do evento para solicitar orientação.",
  },
  {
    icon: CircleHelp,
    question: "Existe limite de vagas?",
    answer:
      "Sim. As vagas são limitadas para garantir a organização e a qualidade da experiência oferecida aos participantes.",
  },
  {
    icon: CircleHelp,
    question: "Como receberei a confirmação da inscrição?",
    answer:
      "Após a confirmação do pagamento, você receberá as informações da inscrição e as orientações necessárias pelos canais informados no momento da compra.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-light),transparent_35%)] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]">
            Perguntas frequentes
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--color-text-light)] lg:text-6xl">
            Tire suas dúvidas antes de
            <span className="text-[var(--color-accent)]">
              {" "}
              garantir sua vaga.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-tertiary)]">
            Reunimos as principais informações para que você possa realizar sua
            inscrição com clareza e segurança.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5">
          {questions.map(({ icon: Icon, question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition hover:border-[var(--color-accent)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-secondary)]">
                    <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>

                  <h3 className="text-left text-lg font-semibold text-[var(--color-text-light)]">
                    {question}
                  </h3>
                </div>

                <span className="relative h-5 w-5 shrink-0">
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-[var(--color-accent)]" />
                  <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 bg-[var(--color-accent)] transition-transform group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>

              <p className="mt-5 border-t border-[var(--color-border)] pt-5 leading-8 text-[var(--color-text-tertiary)]">
                {answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-[var(--color-accent)]/30 bg-[var(--color-bg-card)] px-6 py-10 text-center sm:px-10">
          <h3 className="text-2xl font-bold text-[var(--color-text-light)] lg:text-4xl">
            Sua dúvida não apareceu aqui?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)]">
            Entre em contato com a equipe responsável pela Jornada da
            Transformação para receber mais informações.
          </p>

          <Link
            href="#inscricao"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[var(--color-accent)] px-8 py-5 font-bold uppercase tracking-wide text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
          >
            Garantir minha vaga
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}