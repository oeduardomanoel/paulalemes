import { site, fullAddress } from '#shared/site'

interface SeoInput {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export const useSiteUrl = () => {
  const url = useRuntimeConfig().public.siteUrl as string
  return url.replace(/\/$/, '')
}

export function useSeo({ title, description, path, image, type = 'website' }: SeoInput) {
  const base = useSiteUrl()
  const canonical = `${base}${path === '/' ? '/' : path}`
  const img = `${base}${image || site.images.og}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogType: type,
    ogSiteName: site.name,
    ogLocale: 'pt_BR',
    ogImage: img,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: 'Placa da Paula Lemes Clínica de Podologia, em Itapema',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: img,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  })

  useHead({ link: [{ rel: 'canonical', href: canonical }] })
  return { base, canonical }
}

export function useJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(Array.isArray(data) ? { '@context': 'https://schema.org', '@graph': data } : { '@context': 'https://schema.org', ...data }),
      },
    ],
  })
}

/** Entidade principal do negócio, referenciada por @id em todas as páginas. */
export function businessSchema(base: string) {
  return {
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    '@id': `${base}/#clinica`,
    name: site.name,
    alternateName: ['Paula Lemes Podóloga', 'Paula Lemes Podologia'],
    description: site.description,
    url: `${base}/`,
    image: [`${base}${site.images.signJpg}`, `${base}${site.images.paulaJpg}`, `${base}${site.images.og}`],
    logo: `${base}/apple-touch-icon.png`,
    telephone: site.phoneE164,
    priceRange: '$$',
    medicalSpecialty: 'Podiatric',
    currenciesAccepted: 'BRL',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(site.geo ? { geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng } } : {}),
    hasMap: site.mapsUrl,
    areaServed: [
      { '@type': 'City', name: 'Itapema' },
      { '@type': 'City', name: 'Porto Belo' },
      { '@type': 'City', name: 'Bombinhas' },
      { '@type': 'City', name: 'Balneário Camboriú' },
    ],
    openingHoursSpecification: site.openingHoursSpec.map((h) => ({ '@type': 'OpeningHoursSpecification', ...h })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [site.instagram, site.facebook],
    founder: { '@id': `${base}/#paula` },
    knowsAbout: ['Podologia', 'Unha encravada', 'Onicofose', 'Calosidades', 'Verruga plantar', 'Podologia geriátrica'],
    potentialAction: {
      '@type': 'ReserveAction',
      target: `https://wa.me/${site.whatsapp}`,
      name: 'Agendar pelo WhatsApp',
    },
  }
}

export function personSchema(base: string) {
  return {
    '@type': 'Person',
    '@id': `${base}/#paula`,
    name: site.professional,
    jobTitle: 'Podóloga',
    image: `${base}${site.images.paulaJpg}`,
    worksFor: { '@id': `${base}/#clinica` },
    workLocation: { '@type': 'Place', address: fullAddress() },
    sameAs: [site.instagram],
  }
}

export function websiteSchema(base: string) {
  return {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: `${base}/`,
    name: site.name,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${base}/#clinica` },
  }
}
