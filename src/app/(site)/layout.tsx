// src/app/(site)/layout.tsx

import type {
  Metadata,
  Viewport,
} from "next";
import type { ReactNode } from "react";

import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

import "@/app/globals.css";

import { Toaster } from "react-hot-toast";

import { siteConfig } from "@/client/config/site.config";

import { CartProvider } from "@/core/context/CartContext";
import PwaProvider from "@/core/pwa/PwaProvider";
import Header from "@/client/components/Header";
import Footer from "@/client/components/Footer";

// import Footer from "@/client/components/Footer";
// import Header from "@/client/components/Header";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: [
    "500",
    "600",
    "700",
  ],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    siteConfig.seo.url,
  ),

  applicationName:
    siteConfig.nome,

  manifest:
    "/manifest.webmanifest",

  title:
    siteConfig.seo.titulo,

  description:
    siteConfig.seo.descricao,

  authors: [
    {
      name: siteConfig.nome,
    },
  ],

  creator:
    siteConfig.nome,

  publisher:
    siteConfig.nome,

  keywords:
    siteConfig.seo.keywords,

  appleWebApp: {
    capable: true,
    statusBarStyle:
      "black-translucent",
    title:
      siteConfig.pwa.shortName,
  },

  icons: {
    apple:
      siteConfig.pwa.appleTouchIcon,
  },

  formatDetection: {
    telephone: false,
  },

  openGraph: {
    title:
      siteConfig.seo.titulo,

    description:
      siteConfig.seo.descricao,

    url:
      siteConfig.seo.url,

    siteName:
      siteConfig.nome,

    locale:
      "pt_BR",

    type:
      "website",

    images: [
      {
        url:
          siteConfig.seo.ogImage,

        width:
          1200,

        height:
          630,

        alt:
          siteConfig.seo.titulo,
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      siteConfig.seo.titulo,

    description:
      siteConfig.seo.descricao,

    images: [
      siteConfig.seo.ogImage,
    ],
  },
};

export const viewport: Viewport = {
  width:
    "device-width",

  initialScale:
    1,

  maximumScale:
    5,

  themeColor:
    siteConfig.theme.bgPrimary,

  colorScheme:
    "dark",
};

function buildCssVariables(
  theme: typeof siteConfig.theme,
): string {
  return `
    :root {
      color-scheme: dark;

      --color-bg-primary: ${theme.bgPrimary};
      --color-bg-secondary: ${theme.bgSecondary};
      --color-bg-tertiary: ${theme.bgTertiary};
      --color-bg-card: ${theme.bgCard};
      --color-bg-hover: ${theme.bgHover};
      --color-overlay: ${theme.overlay};

      --color-text-primary: ${theme.textPrimary};
      --color-text-secondary: ${theme.textSecondary};
      --color-text-tertiary: ${theme.textTertiary};
      --color-text-muted: ${theme.textMuted};
      --color-text-light: ${theme.textLight};
      --color-text-hero-muted: ${theme.textHeroMuted};

      --color-accent: ${theme.accent};
      --color-accent-hover: ${theme.accentHover};
      --color-accent-light: ${theme.accentLight};
      --color-accent-dark: ${theme.accentDark};

      --color-info: ${theme.info};
      --color-info-light: ${theme.infoLight};
      --color-glow: ${theme.glow};

      --color-error: ${theme.error};
      --color-success: ${theme.success};

      --color-border: ${theme.border};
      --color-border-light: ${theme.borderLight};
      --color-border-accent: ${theme.borderAccent};

      --color-shadow: ${theme.shadow};
      --color-shadow-accent: ${theme.shadowAccent};

      --color-admin-bg: ${theme.adminBg};
      --color-admin-text: ${theme.adminText};
      --color-admin-border: ${theme.adminBorder};
    }

    html {
      background-color: var(--color-bg-primary);
    }

    body {
      background-color: var(--color-bg-primary);
      color: var(--color-text-primary);
      font-family: var(--font-body), sans-serif;
    }

    ::selection {
      background-color: var(--color-accent);
      color: var(--color-bg-primary);
    }
  `;
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  const pwaEnabled =
    siteConfig.pwa.enabled &&
    process.env.NODE_ENV ===
      "production";

  return (
    <html
      lang="pt-BR"
      className={`
        ${headingFont.variable}
        ${bodyFont.variable}
      `}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html:
              buildCssVariables(
                siteConfig.theme,
              ),
          }}
        />
      </head>

      <body className="overflow-x-hidden antialiased">
        <PwaProvider
          enabled={pwaEnabled}
        >
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                background:
                  "var(--color-bg-card)",

                color:
                  "var(--color-text-primary)",

                border:
                  "1px solid var(--color-border)",
              },
            }}
          />

          <CartProvider>
            <div className="flex min-h-screen flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
              <Header />

              <main className="w-full flex-1 pt-20 bg-[var(--color-bg-primary)]">
                {children}
              </main>

              <Footer />
            </div>
          </CartProvider>
        </PwaProvider>
      </body>
    </html>
  );
}