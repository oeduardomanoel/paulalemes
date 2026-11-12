export default defineEventHandler((event) => {
  const base = siteBase(event)
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  // Buscadores e assistentes de IA liberados: o objetivo é ser encontrado e citado (SEO + GEO).
  return `# Paula Lemes Clínica de Podologia · Itapema, SC
User-agent: *
Allow: /

# Assistentes e buscadores de IA
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${base}/sitemap.xml

# Resumo do site para modelos de linguagem: ${base}/llms.txt
`
})
