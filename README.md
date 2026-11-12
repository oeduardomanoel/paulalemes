# Paula Lemes Clínica de Podologia · site

Site da podóloga Paula Lemes (Itapema, SC). Nuxt 4, 100% estático, pronto para a Vercel.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # gera .output/public
```

## Deploy na Vercel

1. Importe o repositório na Vercel (o `vercel.json` já define build e saída).
2. Em Settings → Environment Variables, crie `NUXT_PUBLIC_SITE_URL` com o domínio final, ex.: `https://paulalemespodologia.com.br`.
3. Faça o deploy. Depois, envie `https://SEU-DOMINIO/sitemap.xml` no Google Search Console.

## O que está incluído

- Home com hero, sinais de alerta (cada sintoma abre o WhatsApp com a mensagem pronta), tratamentos, como funciona, sobre a Paula, home care, avaliações, FAQ, mapa e contato.
- 8 páginas de tratamento (`/tratamentos/...`) com conteúdo próprio para SEO local.
- JSON-LD: `MedicalBusiness`/`LocalBusiness`, `Person`, `WebSite`, `FAQPage`, `Service`, `MedicalWebPage`, `BreadcrumbList`.
- `/sitemap.xml`, `/robots.txt` (buscadores e bots de IA liberados), `/llms.txt` e `/llms-full.txt`.
- Fotos reais do Instagram da Paula (retrato, feed com 6 posts e capas de 2 tratamentos) em `public/images/`.
- Open Graph 1200×630, favicon SVG/PNG, ícones PWA e manifest.
- Scroll animations (`v-reveal` + scroll-driven CSS) e hover states em todos os elementos interativos.

## Antes de publicar (confirmar com a Paula)

Tudo fica em `shared/site.ts`:

- Horário de funcionamento (o Google só confirma quinta, 9h às 18h).
- Coordenadas (`geo`) do Google Business Profile.
- Domínio final.

Regras de design e copy para quem for editar: `AGENTS.md`.
