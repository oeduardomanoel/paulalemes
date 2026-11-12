import { services } from './shared/services'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      // Sobrescreva com NUXT_PUBLIC_SITE_URL na Vercel quando o domínio estiver definido.
      siteUrl: 'https://paulalemespodologia.com.br',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      meta: [
        { name: 'theme-color', content: '#8B9A6B' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'geo.region', content: 'BR-SC' },
        { name: 'geo.placename', content: 'Itapema' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Gilda+Display&family=Montserrat:wght@400;500;600&display=swap',
        },
        { rel: 'preload', as: 'image', href: '/images/placa-paula-lemes.webp', fetchpriority: 'high' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/tratamentos',
        ...services.map((s) => `/tratamentos/${s.slug}`),
        '/sitemap.xml',
        '/robots.txt',
        '/llms.txt',
        '/llms-full.txt',
      ],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },
})
