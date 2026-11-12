<script setup lang="ts">
import { site, whatsappLink, fullAddress } from '#shared/site'
import { services } from '#shared/services'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__about">
          <BrandLogo tone="light" />
          <p>Podologia com escuta, técnica e material esterilizado. Na Meia Praia, em Itapema, ou na sua casa.</p>
          <div class="footer__social">
            <a :href="site.instagram" target="_blank" rel="noopener" aria-label="Instagram da Paula Lemes"><AppIcon name="instagram" /></a>
            <a :href="whatsappLink()" target="_blank" rel="noopener" aria-label="WhatsApp da Paula Lemes"><AppIcon name="whatsapp" /></a>
          </div>
        </div>

        <nav aria-label="Tratamentos">
          <h2 class="footer__title">Tratamentos</h2>
          <ul class="footer__list">
            <li v-for="s in services" :key="s.slug">
              <NuxtLink :to="`/tratamentos/${s.slug}`" class="footer__link">{{ s.name }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <h2 class="footer__title">Contato</h2>
          <address class="footer__list">
            <a :href="site.mapsUrl" target="_blank" rel="noopener" class="footer__link">{{ fullAddress() }}</a>
            <a :href="`tel:${site.phoneE164}`" class="footer__link">{{ site.phoneDisplay }}</a>
            <a :href="site.instagram" target="_blank" rel="noopener" class="footer__link">{{ site.instagramHandle }}</a>
          </address>
          <h2 class="footer__title footer__title--gap">Horário</h2>
          <ul class="footer__list">
            <li v-for="h in site.hours" :key="h.days">{{ h.days }}: {{ h.time }}</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© {{ year }} {{ site.name }}. Itapema, SC.</p>
        <p>As informações deste site não substituem uma avaliação presencial.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--sage-900);
  color: var(--sage-200);
  padding-block: var(--space-9) var(--space-12);
  font-size: var(--text-14);
}
.footer__grid {
  display: grid;
  gap: var(--space-7);
}
.footer__about {
  display: grid;
  gap: var(--space-4);
  align-content: start;
  max-width: 360px;
}
.footer__social {
  display: flex;
  gap: var(--space-2);
}
.footer__social a {
  display: grid;
  place-items: center;
  width: var(--control-md);
  height: var(--control-md);
  border-radius: 50%;
  border: 1px solid rgba(230, 234, 219, 0.2);
  color: var(--cream-100);
  transition: all var(--dur-med) var(--ease-out);
}
.footer__social a:hover {
  background: var(--glow-400);
  border-color: var(--glow-400);
  color: var(--sage-900);
  transform: translateY(-2px);
}
.footer__social svg {
  width: 20px;
  height: 20px;
}
.footer__title {
  font-family: var(--font-sans);
  font-size: var(--text-12);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--glow-300);
  margin-bottom: var(--space-3);
}
.footer__title--gap {
  margin-top: var(--space-5);
}
.footer__list {
  display: grid;
  gap: var(--space-2);
  font-style: normal;
}
.footer__link {
  width: fit-content;
  color: var(--sage-100);
  background-image: linear-gradient(var(--glow-400), var(--glow-400));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size var(--dur-med) var(--ease-out), color var(--dur-fast);
}
.footer__link:hover {
  color: var(--cream-50);
  background-size: 100% 1px;
}
.footer__bottom {
  margin-top: var(--space-8);
  padding-top: var(--space-4);
  border-top: 1px solid rgba(230, 234, 219, 0.12);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  justify-content: space-between;
  font-size: var(--text-12);
  color: var(--sage-300);
}
@media (min-width: 768px) {
  .footer__grid {
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: var(--space-8);
  }
}
@media (min-width: 1024px) {
  .footer {
    padding-bottom: var(--space-9);
  }
}
</style>
