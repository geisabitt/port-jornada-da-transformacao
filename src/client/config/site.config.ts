// src/client/config/site.config.ts
// ⚠️ PREENCHA ESSES DADOS PARA CADA CLIENTE

export const siteConfig = {
  nome: "Jornada da Transformação",

  // Logo
  logoHorizontal: "/logo-jornada-transformacao-horizontal.png",
  logoVertical: "/logo-jornada-transformacao-vertical.png",
  logoAlt: "Jornada da Transformação com Rafael Ramos",

  // WhatsApp
  whatsapp: "5521976883449",
  whatsappDisplay: "(21) 97688-3449",
  whatsappMensagem:
    "Olá! Vim pelo site e gostaria de garantir minha vaga na Jornada da Transformação.",

  // Header
  headerCta: "Garantir minha vaga",

  // Redes sociais
  instagram: "@eurafaelramos",
  facebook: "",
  tiktok: "",

  cidade: "Nova Iguaçu, RJ",

  // Navegação desktop
  navLinks: [
    { label: "Início", href: "/" },
    { label: "A Jornada", href: "/#jornada" },
    { label: "Rafael Ramos", href: "/#rafael-ramos" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "Dúvidas", href: "/#faq" },
  ],

  // Navegação mobile
  mobileNavLinks: [
    { label: "Início", href: "/" },
    { label: "A Jornada", href: "/#jornada" },
    { label: "Rafael Ramos", href: "/#rafael-ramos" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "Garantir vaga", href: "/#inscricao" },
  ],

  // Footer — benefícios
  benefits: [
    {
      title: "Inteligência emocional",
      description:
        "Aprenda a lidar melhor com suas emoções e com os desafios da vida.",
    },
    {
      title: "Neurociência aplicada",
      description:
        "Compreenda como pensamentos, emoções e comportamentos influenciam seus resultados.",
    },
    {
      title: "Transformação prática",
      description:
        "Desenvolva clareza, novos hábitos e decisões alinhadas à vida que deseja construir.",
    },
  ],

  // Footer — links
  footerNavLinks: [
    { label: "Início", href: "/" },
    { label: "A Jornada", href: "/#jornada" },
    { label: "Dúvidas", href: "/#faq" },
  ],

  footerDescription:
    "Uma experiência presencial de desenvolvimento humano, inteligência emocional, comportamento e neurociência aplicada.",

  copyrightTagline:
    "Transforme seus pensamentos, emoções e comportamentos para construir uma Vida de Valor.",

  seo: {
    titulo:
      "Jornada da Transformação – Inteligência Emocional e Neurociência",

    descricao:
      "Participe da Jornada da Transformação com Rafael Ramos, uma experiência presencial em Nova Iguaçu para romper padrões de autossabotagem, desenvolver inteligência emocional e construir uma vida com mais clareza, equilíbrio e direção.",

    url: "https://www.jornadadatransformacao.com.br",

    ogImage: "/og-image.png",

    keywords: [
      "Jornada da Transformação",
      "Rafael Ramos",
      "desenvolvimento pessoal",
      "inteligência emocional",
      "neurociência aplicada",
      "comportamento humano",
      "autossabotagem",
      "mudança de hábitos",
      "mentalidade",
      "propósito de vida",
      "treinamento presencial",
      "evento em Nova Iguaçu",
      "desenvolvimento humano",
      "transformação pessoal",
      "Vida de Valor",
    ],
  },

  // ─── Instalação offline ────────────────────────────────────
  pwa: {
    enabled: true,

    shortName: "Jornada",

    orientation: "any" as const,

    icon192: "/pwa/icon-192.png",
    icon512: "/pwa/icon-512.png",
    maskableIcon512: "/pwa/icon-maskable-512.png",
    appleTouchIcon: "/pwa/apple-touch-icon.png",

    offlineRoutes: [
      "/",
      "/#jornada",
      "/#rafael-ramos",
      "/#depoimentos",
    ],
  },

  // ─── Tema visual ───────────────────────────────────────────
  theme: {
    // Fundos
    bgPrimary: "#020711",
    bgSecondary: "#050C19",
    bgTertiary: "#081426",
    bgCard: "#0B192D",
    bgHover: "#10233D",
    overlay: "#01040A",

    // Textos
    textPrimary: "#F7F3E8",
    textSecondary: "#D9DEE7",
    textTertiary: "#AAB4C2",
    textMuted: "#7F8B9B",
    textLight: "#FFFFFF",
    textHeroMuted: "#C5CDD8",

    // Dourado
    accent: "#C99232",
    accentHover: "#E0AA48",
    accentLight: "#F0C66B",
    accentDark: "#8D5D19",

    // Azul luminoso
    info: "#125A9E",
    infoLight: "#2B7FC1",
    glow: "#0877CE",

    // Estados
    error: "#DC2626",
    success: "#16A34A",

    // Bordas
    border: "#223751",
    borderLight: "#365675",
    borderAccent: "#76551F",

    // Sombras
    shadow: "#00040A",
    shadowAccent: "#C99232",

    // Administração
    adminBg: "#081426",
    adminText: "#F7F3E8",
    adminBorder: "#223751",
  },
}