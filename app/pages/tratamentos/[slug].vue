<script setup lang="ts">
import { site, whatsappLink } from '#shared/site'
import { services, getService } from '#shared/services'

const route = useRoute()
const service = getService(String(route.params.slug))
if (!service) throw createError({ statusCode: 404, statusMessage: 'Tratamento não encontrado', fatal: true })

const path = `/tratamentos/${service.slug}`
const { base } = useSeo({ title: service.seoTitle, description: service.seoDescription, path, type: 'article' })

useJsonLd([
  businessSchema(base),
  {
    '@type': 'MedicalWebPage',
    '@id': `${base}${path}#pagina`,
    url: `${base}${path}`,
    name: service.seoTitle,
    description: service.seoDescription,
    inLanguage: 'pt-BR',
    about: { '@type': 'MedicalCondition', name: service.technical ? `${service.name} (${service.technical})` : service.name },
    audience: { '@type': 'Patient' },
    lastReviewed: '2026-11-12',
    reviewedBy: { '@id': `${base}/#paula` },
    isPartOf: { '@id': `${base}/#website` },
  },
  {
    '@type': 'Service',
    '@id': `${base}${path}#servico`,
    name: `${service.name} em Itapema`,
    serviceType: service.name,
    description: service.what,
    provider: { '@id': `${base}/#clinica` },
    areaServed: { '@type': 'City', name: 'Itapema' },
    url: `${base}${path}`,
  },
  {
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Tratamentos', item: `${base}/tratamentos` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${base}${path}` },
    ],
  },
])

const others = services.filter((s) => s.slug !== service.slug).slice(0, 4)
const msg = `Oi, Paula! Vim pelo site e quero agendar uma avaliação para ${service.name.toLowerCase()}.`
</script>

<template>
  <div v-if="service">
    <section class="svc-hero">
      <div class="container svc-hero__inner">
        <nav class="crumbs" aria-label="Você está em">
          <NuxtLink to="/" class="link">Início</NuxtLink>
          <span aria-hidden="true">/</span>
          <NuxtLink to="/tratamentos" class="link">Tratamentos</NuxtLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{{ service.name }}</span>
        </nav>
        <div class="svc-hero__grid">
          <div class="svc-hero__copy">
            <p v-reveal class="eyebrow">{{ service.technical || 'Podologia em Itapema' }}</p>
            <h1 v-reveal="{ variant: 'blur', delay: 80 }" class="svc-hero__title">
              {{ service.name }} <em class="serif-italic text-brand">em Itapema</em>
            </h1>
            <p v-reveal="{ delay: 160 }" class="lead">{{ service.lead }}</p>
            <div v-reveal="{ delay: 240 }" class="svc-hero__ctas">
              <a :href="whatsappLink(msg)" target="_blank" rel="noopener" class="btn btn--primary btn--xl">
                <AppIcon name="whatsapp" /> Agendar avaliação
              </a>
              <span class="svc-hero__rating">
                <span class="stars" aria-hidden="true"><AppIcon v-for="n in 5" :key="n" name="star" /></span>
                5,0 · {{ site.rating.count }} avaliações no Google
              </span>
            </div>
          </div>
          <div v-reveal="'scale'" class="svc-hero__icon" aria-hidden="true">
            <span class="svc-hero__halo" />
            <LogoMark class="svc-hero__mark" />
          </div>
        </div>
      </div>
    </section>

    <section class="section svc-body">
      <div class="container svc-body__grid">
        <article class="svc-article">
          <div v-reveal class="block">
            <h2 class="block__title">O que é</h2>
            <p>{{ service.what }}</p>
          </div>

          <div v-reveal class="block">
            <h2 class="block__title">Sinais de que é hora de procurar a podóloga</h2>
            <ul class="ticks">
              <li v-for="s in service.signs" :key="s"><span class="tick"><AppIcon name="check" /></span>{{ s }}</li>
            </ul>
          </div>

          <div v-reveal class="block">
            <h2 class="block__title">Como é o atendimento</h2>
            <ol class="flow">
              <li v-for="(h, i) in service.how" :key="h">
                <span class="flow__n">{{ i + 1 }}</span>
                <span>{{ h }}</span>
              </li>
            </ol>
          </div>

          <div v-reveal class="block">
            <h2 class="block__title">Cuidados em casa</h2>
            <ul class="ticks">
              <li v-for="c in service.care" :key="c"><span class="tick tick--soft"><AppIcon name="heart" /></span>{{ c }}</li>
            </ul>
          </div>

          <aside v-if="service.alert" v-reveal class="alert" role="note">
            <strong>Importante</strong>
            <p>{{ service.alert }}</p>
          </aside>

          <div class="block">
            <h2 v-reveal class="block__title">Perguntas sobre {{ service.name.toLowerCase() }}</h2>
            <FaqList :items="service.faq" />
          </div>
        </article>

        <aside class="svc-side">
          <div class="side-card">
            <BrandLogo compact />
            <p>Avaliação individual com a podóloga Paula Lemes, na Meia Praia ou na sua casa.</p>
            <a :href="whatsappLink(msg)" target="_blank" rel="noopener" class="btn btn--primary btn--xl side-card__btn">
              <AppIcon name="whatsapp" /> Agendar no WhatsApp
            </a>
            <ul class="side-card__info">
              <li><AppIcon name="pin" /> Rua 256, 203 · Meia Praia, Itapema</li>
              <li><AppIcon name="clock" /> {{ site.hours[0].days }}, {{ site.hours[0].time }}</li>
              <li><AppIcon name="phone" /> <a :href="`tel:${site.phoneE164}`" class="link">{{ site.phoneDisplay }}</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section--tint">
      <div class="container">
        <div class="section-head">
          <p v-reveal class="eyebrow">Outros tratamentos</p>
          <h2 v-reveal="{ delay: 80 }" class="h2">Também pode te <em class="serif-italic text-brand">interessar.</em></h2>
        </div>
        <ul class="others">
          <li v-for="(s, i) in others" :key="s.slug" v-reveal="{ delay: i * 80 }"><ServiceCard :service="s" /></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.svc-hero {
  position: relative;
  padding-block: var(--space-5) var(--space-9);
  overflow: clip;
  background: radial-gradient(60% 80% at 90% 10%, rgba(241, 198, 127, 0.28), transparent 70%);
}
.crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-size: var(--text-12);
  color: var(--muted);
  margin-bottom: var(--space-7);
}
.crumbs .link {
  font-weight: 500;
}
.svc-hero__grid {
  display: grid;
  gap: var(--space-7);
  align-items: center;
}
.svc-hero__copy {
  display: grid;
  gap: var(--space-4);
  max-width: 720px;
}
.svc-hero__title {
  font-size: var(--text-display);
  line-height: 1.04;
  letter-spacing: -0.02em;
}
.svc-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3) var(--space-4);
  margin-top: var(--space-2);
}
.svc-hero__rating {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-14);
  color: var(--muted);
}
.stars {
  display: inline-flex;
  gap: 2px;
  color: var(--glow-500);
}
.stars svg {
  width: 16px;
  height: 16px;
}
.svc-hero__icon {
  position: relative;
  display: none;
  place-items: center;
  width: 280px;
  aspect-ratio: 1;
  justify-self: center;
  border-radius: 50%;
  background: var(--sage-500);
  color: var(--cream-50);
  box-shadow: 0 0 0 8px var(--cream-50), var(--shadow-lg);
}
.svc-hero__halo {
  position: absolute;
  inset: 4%;
  border-radius: 50%;
  box-shadow: var(--shadow-glow);
  animation: breathe 5s var(--ease-in-out) infinite alternate;
  z-index: -1;
}
@keyframes breathe {
  from { opacity: 0.5; }
  to { opacity: 1; }
}
.svc-hero__mark {
  width: 104px;
  height: 116px;
}
.svc-hero__mark :deep(.logo-stroke) {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw 2.4s var(--ease-out) 0.4s forwards;
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

.svc-body {
  padding-top: var(--space-5);
}
.svc-body__grid {
  display: grid;
  gap: var(--space-7);
}
.svc-article {
  display: grid;
  gap: var(--space-7);
  max-width: 720px;
}
.block {
  display: grid;
  gap: var(--space-3);
  color: var(--ink-soft);
  font-size: var(--text-18);
}
.block__title {
  font-size: var(--text-36);
  color: var(--ink);
}
.ticks {
  display: grid;
  gap: var(--space-2);
  font-size: var(--text-16);
}
.ticks li {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
}
.tick {
  display: grid;
  place-items: center;
  flex: none;
  width: var(--space-4);
  height: var(--space-4);
  margin-top: 2px;
  border-radius: 50%;
  background: var(--sage-500);
  color: var(--cream-50);
}
.tick svg {
  width: 14px;
  height: 14px;
}
.tick--soft {
  background: var(--glow-300);
  color: var(--sage-900);
}
.flow {
  display: grid;
  gap: var(--space-2);
  font-size: var(--text-16);
}
.flow li {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  padding: var(--space-3);
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--line);
  transition: border-color var(--dur-med), transform var(--dur-med) var(--ease-out);
}
.flow li:hover {
  border-color: var(--sage-300);
  transform: translateX(4px);
}
.flow__n {
  display: grid;
  place-items: center;
  flex: none;
  width: var(--control-md);
  height: var(--control-md);
  border-radius: 50%;
  background: var(--sage-100);
  color: var(--sage-800);
  font-family: var(--font-display);
  font-size: var(--text-20);
}
.alert {
  display: grid;
  gap: var(--space-2);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  background: #fbf1df;
  border: 1px solid var(--glow-300);
  color: var(--ink-soft);
}
.alert strong {
  font-size: var(--text-12);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8a5a17;
}
.svc-side {
  align-self: start;
}
.side-card {
  display: grid;
  gap: var(--space-4);
  padding: var(--spacing-card-lg);
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-md);
  font-size: var(--text-14);
  color: var(--muted);
}
.side-card__btn {
  width: 100%;
}
.side-card__info {
  display: grid;
  gap: var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px solid var(--line);
}
.side-card__info li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.side-card__info svg {
  width: 16px;
  height: 16px;
  color: var(--sage-600);
  flex: none;
}
.others {
  display: grid;
  gap: var(--gap-grid);
}
@media (min-width: 640px) {
  .others {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .svc-hero__grid {
    grid-template-columns: 1fr auto;
  }
  .svc-hero__icon {
    display: grid;
  }
  .svc-body__grid {
    grid-template-columns: 1fr 360px;
    gap: var(--space-9);
  }
  .svc-side {
    position: sticky;
    top: calc(var(--header-h) + var(--space-4));
  }
  .others {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
