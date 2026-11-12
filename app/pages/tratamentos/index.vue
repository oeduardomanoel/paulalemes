<script setup lang="ts">
import { whatsappLink } from '#shared/site'
import { services } from '#shared/services'

const { base } = useSeo({
  title: 'Tratamentos de podologia em Itapema',
  description:
    'Todos os tratamentos da Paula Lemes Clínica de Podologia em Itapema: unha encravada, onicofose, calos, verruga plantar, unhas alteradas, podologia geriátrica e home care.',
  path: '/tratamentos',
})

useJsonLd([
  businessSchema(base),
  {
    '@type': 'CollectionPage',
    url: `${base}/tratamentos`,
    name: 'Tratamentos de podologia em Itapema',
    hasPart: services.map((s) => ({ '@type': 'MedicalWebPage', name: s.name, url: `${base}/tratamentos/${s.slug}` })),
  },
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Tratamentos', item: `${base}/tratamentos` },
    ],
  },
])
</script>

<template>
  <section class="section page">
    <div class="container">
      <div class="section-head">
        <p v-reveal class="eyebrow">Tratamentos</p>
        <h1 v-reveal="{ variant: 'blur', delay: 80 }" class="page__title">
          Tratamentos de podologia <em class="serif-italic text-brand">em Itapema</em>
        </h1>
        <p v-reveal="{ delay: 160 }" class="lead">
          Escolha o que mais se parece com o seu caso. Na dúvida, chame no WhatsApp: a avaliação serve justamente para
          descobrir o que está acontecendo.
        </p>
        <a v-reveal="{ delay: 240 }" :href="whatsappLink()" target="_blank" rel="noopener" class="btn btn--primary btn--xl page__btn">
          <AppIcon name="whatsapp" /> Agendar avaliação
        </a>
      </div>
      <ul class="grid">
        <li v-for="(s, i) in services" :key="s.slug" v-reveal="{ delay: (i % 4) * 80 }"><ServiceCard :service="s" /></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding-top: var(--space-7);
}
.page__title {
  font-size: var(--text-display);
  line-height: 1.04;
  letter-spacing: -0.02em;
}
.page__btn {
  justify-self: start;
  margin-top: var(--space-2);
}
.grid {
  display: grid;
  gap: var(--gap-grid);
}
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
</style>
