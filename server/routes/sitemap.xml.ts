import { services } from '#shared/services'

const LASTMOD = '2026-11-12'

export default defineEventHandler((event) => {
  const base = siteBase(event)
  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly', image: '/images/placa-paula-lemes.jpg' },
    { loc: '/tratamentos', priority: '0.8', changefreq: 'monthly' },
    ...services.map((s) => ({ loc: `/tratamentos/${s.slug}`, priority: '0.8', changefreq: 'monthly' })),
  ]

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${base}${u.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${
      u.image
        ? `
    <image:image>
      <image:loc>${base}${u.image}</image:loc>
      <image:title>Paula Lemes Clínica de Podologia em Itapema</image:title>
    </image:image>`
        : ''
    }
  </url>`,
    )
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>
`
})
