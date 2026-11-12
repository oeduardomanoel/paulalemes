<script setup lang="ts">
import { site } from '#shared/site'
useHead({
  titleTemplate: (t) => (t && !t.includes('Paula Lemes') ? `${t} | Paula Lemes` : t || site.name),
})
</script>

<template>
  <a href="#conteudo" class="skip-link">Pular para o conteúdo</a>
  <div class="scroll-progress" aria-hidden="true" />
  <SiteHeader />
  <main id="conteudo">
    <NuxtPage />
  </main>
  <SiteFooter />
  <WhatsAppDock />
</template>
