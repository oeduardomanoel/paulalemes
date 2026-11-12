<script setup lang="ts">
import type { NuxtError } from '#app'
import { whatsappLink } from '#shared/site'
defineProps<{ error: NuxtError }>()
useHead({ title: 'Página não encontrada', meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <SiteHeader />
  <main class="err">
    <div class="container err__inner">
      <LogoMark class="err__mark" />
      <p class="eyebrow">Erro {{ error.statusCode }}</p>
      <h1 class="err__title">Essa página deu um passo em falso.</h1>
      <p class="lead">O link pode ter mudado. Volte para o início ou fale direto com a Paula.</p>
      <div class="err__ctas">
        <button class="btn btn--primary btn--xl" @click="clearError({ redirect: '/' })">Voltar ao início</button>
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn btn--ghost btn--xl"><AppIcon name="whatsapp" /> WhatsApp</a>
      </div>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.err {
  padding-block: var(--space-10);
}
.err__inner {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: var(--space-4);
}
.err__mark {
  width: 80px;
  height: 90px;
  color: var(--sage-500);
}
.err__title {
  font-size: var(--text-h2);
  max-width: 18ch;
}
.err__ctas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
}
</style>
