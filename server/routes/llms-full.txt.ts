import { site, fullAddress } from '#shared/site'
import { services } from '#shared/services'
import { faq, reviews } from '#shared/content'

export default defineEventHandler((event) => {
  const base = siteBase(event)
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  const svc = services
    .map(
      (s) => `## ${s.name}${s.technical ? ` (${s.technical})` : ''}

URL: ${base}/tratamentos/${s.slug}

${s.lead}

${s.what}

Sinais:
${s.signs.map((x) => `- ${x}`).join('\n')}

Como é o atendimento:
${s.how.map((x, i) => `${i + 1}. ${x}`).join('\n')}

Cuidados em casa:
${s.care.map((x) => `- ${x}`).join('\n')}
${s.alert ? `\nImportante: ${s.alert}\n` : ''}
Perguntas:
${s.faq.map((f) => `- ${f.q}\n  ${f.a}`).join('\n')}
`,
    )
    .join('\n')

  return `# ${site.name} · conteúdo completo

${site.description}

Endereço: ${fullAddress()}
WhatsApp: ${site.phoneDisplay} · https://wa.me/${site.whatsapp}
Horário: ${site.hours.map((h) => `${h.days}: ${h.time}`).join('; ')}
Instagram: ${site.instagram}
Avaliação: ${site.rating.value.toFixed(1)} no Google (${site.rating.count} avaliações)

# Tratamentos

${svc}
# Perguntas frequentes

${faq.map((f) => `- ${f.q}\n  ${f.a}`).join('\n')}

# O que clientes dizem (Google)

${reviews.map((r) => `- "${r.text}" (${r.author})`).join('\n')}

As informações deste conteúdo não substituem uma avaliação presencial.
`
})
