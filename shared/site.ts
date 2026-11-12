/**
 * Fonte única de verdade do negócio.
 * Tudo que aparece no site, no JSON-LD, no sitemap e no llms.txt sai daqui.
 * Itens marcados com CONFIRMAR precisam ser validados com a Paula antes de publicar.
 */
export const site = {
  name: 'Paula Lemes Clínica de Podologia',
  shortName: 'Paula Lemes',
  professional: 'Paula Lemes',
  role: 'Podóloga',
  tagline: 'Podologia em Itapema, SC',
  description:
    'Clínica de podologia em Itapema (SC) com a podóloga Paula Lemes. Tratamento de unha encravada, onicofose, calos, verruga plantar, unhas alteradas, podologia geriátrica e atendimento domiciliar. Agende pelo WhatsApp.',

  phoneDisplay: '(47) 99786-8753',
  phoneE164: '+5547997868753',
  whatsapp: '5547997868753',
  whatsappMessage: 'Oi, Paula! Vim pelo site e quero agendar uma avaliação.',

  instagram: 'https://www.instagram.com/paulalemesspodologia/',
  instagramHandle: '@paulalemesspodologia',
  facebook: 'https://www.facebook.com/paulalemesateliedeunhas/',

  address: {
    street: 'Rua 256, 203',
    neighborhood: 'Meia Praia',
    city: 'Itapema',
    state: 'SC',
    postalCode: '88220-000',
    country: 'BR',
  },
  // CONFIRMAR: preencha com as coordenadas do Google Business Profile (ex.: { lat: -27.12, lng: -48.61 }).
  // Enquanto for null, o JSON-LD não publica geo (melhor nada do que coordenada errada).
  geo: null as null | { lat: number; lng: number },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Paula+Lemes+Pod%C3%B3loga+Rua+256+203+Itapema+SC',
  mapsEmbed:
    'https://www.google.com/maps?q=Paula+Lemes+Pod%C3%B3loga,+Rua+256,+203,+Meia+Praia,+Itapema+-+SC&output=embed',

  // CONFIRMAR: o Google mostra quinta 9h às 18h. Os demais dias seguem o mesmo padrão até confirmação.
  hours: [
    { days: 'Segunda a sexta', time: '9h às 18h' },
    { days: 'Sábado e domingo', time: 'Fechado' },
  ],
  openingHoursSpec: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  ],

  rating: { value: 5.0, count: 31, source: 'Google' },
  followers: '22 mil',
  foundedYear: 2025,

  images: {
    /** Retrato da Paula (do Instagram dela). Vazio = usa o painel com o símbolo. */
    paula: '/images/paula-lemes-podologa.webp',
    paulaJpg: '/images/paula-lemes-podologa.jpg',
    avatar: '/images/paula-avatar.webp',
    sign: '/images/placa-paula-lemes.webp',
    signJpg: '/images/placa-paula-lemes.jpg',
    og: '/og-image.jpg',
  },
} as const

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const fullAddress = () =>
  `${site.address.street}, ${site.address.neighborhood}, ${site.address.city} - ${site.address.state}, ${site.address.postalCode}`
