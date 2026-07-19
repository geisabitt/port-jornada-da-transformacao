// src/core/components/Header.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/client/config/site.config'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] backdrop-blur-xl"
      style={{
        backgroundColor:
          'color-mix(in srgb, var(--color-bg-primary) 88%, transparent)',
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={siteConfig.logoHorizontal}
            alt={siteConfig.logoAlt}
            width={170}
            height={60}
            priority
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-10 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition hover:text-[var(--color-accent)]"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <Link
            href="#inscricao"
            className="rounded-xl bg-[var(--color-accent)] px-6 py-3 font-semibold text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
          >
            Garantir minha vaga
          </Link>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Abrir menu"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-6 py-6">
          <nav className="flex flex-col gap-6">
            {siteConfig.mobileNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#inscricao"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[var(--color-accent)] px-5 py-4 text-center font-semibold text-[var(--color-bg-primary)] transition hover:bg-[var(--color-accent-hover)]"
            >
              Garantir minha vaga
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}