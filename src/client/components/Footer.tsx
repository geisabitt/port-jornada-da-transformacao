// src/client/components/Footer.tsx

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { siteConfig } from "../config/site.config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-text-light)]">
              Rafael Ramos
            </h3>

            <p className="mt-5 max-w-sm leading-7 text-[var(--color-text-tertiary)]">
              A Jornada da Transformação é um convite para desenvolver
              inteligência emocional, fortalecer sua identidade e construir uma
              vida com mais propósito.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--color-text-light)]">
              Informações
            </h4>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-[var(--color-text-tertiary)]">
                <MapPin className="h-5 w-5 text-[var(--color-accent)]" />
                Nova Iguaçu • RJ
              </div>

              <div className="flex items-center gap-3 text-[var(--color-text-tertiary)]">
                <Phone className="h-5 w-5 text-[var(--color-accent)]" />
                {siteConfig.whatsappDisplay}
              </div>

            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--color-text-light)]">
              Redes Sociais
            </h4>

            <div className="mt-6 flex gap-4">
              <Link
                href="https://www.instagram.com/eurafaelramos/"
                className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-3 transition hover:border-[var(--color-accent)]"
              >
                <Instagram className="h-5 w-5 text-[var(--color-text-secondary)]" />
                {siteConfig.instagram}
              </Link>

            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-text-muted)] lg:flex-row">
          <p>
            © {year} Rafael Ramos. Todos os direitos reservados.
          </p>

          <p>
            Criado com ❤️ por{" "}
            <a
              href="https://www.bittup.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-accent)] transition hover:opacity-80"
            >
              BittUp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}