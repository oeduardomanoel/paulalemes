# AGENTS.md · Paula Lemes Clínica de Podologia

Site institucional em Nuxt 4, gerado estático (`nuxt generate`) e publicado na Vercel.
Leia este arquivo antes de mexer em qualquer tela.

## Onde fica cada coisa

- `shared/site.ts`: dados do negócio (endereço, telefone, horário, nota, imagens). Fonte única de verdade para páginas, JSON-LD, sitemap e llms.txt.
- `shared/services.ts`: tratamentos. Cada item vira uma página em `/tratamentos/<slug>` e entra no sitemap automaticamente.
- `shared/content.ts`: depoimentos, FAQ, sintomas e passos do atendimento.
- `app/assets/css/main.css`: design tokens. Não crie cores, espaçamentos ou raios fora daqui.
- `server/routes/`: `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt` (pré-renderizados no build).

## Design system (grid de 8pt)

- Use a escala de espaçamento de 8pt (`--space-1` 4px até `--space-12` 128px). 4px só para ajuste fino.
- Não introduza valores arbitrários (13px, 18px, 22px). Se precisar de um novo, justifique e adicione como token.
- Use os tokens semânticos quando existirem: `--spacing-card`, `--spacing-section`, `--spacing-page`, `--gap-grid`.
- Alturas de controle: 32 (`--control-sm`), 40 (`--control-md`), 48 (`--control-lg`), 56 (`--control-xl`). Botão, chip e input lado a lado compartilham a mesma altura.
- Proximidade: 8px dentro de um grupo (label + campo, título + subtítulo), 16–24px entre grupos, 48px+ entre blocos de seção.
- Cards: padrão 24px de padding, destaque 32px. Gap entre cards 16px (mobile) e 24px (desktop).
- Raios: 6 / 10 / 16 / 24 / 32 / pill. Ícones: 16, 20 ou 24px.
- Tipografia: Gilda Display para títulos (mesma família visual do wordmark da placa), Montserrat para texto e rótulos. Escala 12, 14, 16, 18, 20, 24, 30, 36, 48 e display fluido.
- Cores vêm da placa da clínica: verde sálvia `--sage-500` (#8B9A6B), creme `--cream-*` e a luz quente `--glow-400`. Texto sobre verde claro precisa ser escuro; botões usam `--sage-800`.
- Movimento: `v-reveal` para entrada no scroll, hover sempre com transição de 160–320ms e `--ease-out`. Respeite `prefers-reduced-motion` (já tratado no CSS global).

## Copy

- Português do Brasil, segunda pessoa (“você”), tom acolhedor e direto. A Paula fala em primeira pessoa só na seção “Sobre”.
- Sem travessão como aparte, sem “não apenas X, mas também Y”, sem frases de efeito vazias.
- Nunca invente número, depoimento, preço ou credencial. Dado novo entra primeiro em `shared/`.
- Conteúdo de saúde usa “pode”, não promete cura e indica procurar médico quando há sinal de infecção.

## SEO e GEO

- Toda página chama `useSeo()` (title, description, canonical, Open Graph) e `useJsonLd()`.
- A entidade principal é `MedicalBusiness` com `@id` `/#clinica`. Páginas de tratamento referenciam esse `@id`.
- Domínio vem de `NUXT_PUBLIC_SITE_URL`. Troque lá, não no código.
