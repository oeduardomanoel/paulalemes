<script setup lang="ts">
import { whatsappLink } from '#shared/site'

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()

const nav = [
  { label: 'Tratamentos', to: '/#tratamentos' },
  { label: 'A Paula', to: '/#sobre' },
  { label: 'Avaliações', to: '/#avaliacoes' },
  { label: 'Dúvidas', to: '/#duvidas' },
  { label: 'Como chegar', to: '/#contato' },
]

const onScroll = () => (scrolled.value = window.scrollY > 8)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

watch(() => route.fullPath, () => (open.value = false))
watch(open, (v) => {
  if (import.meta.client) document.documentElement.style.overflow = v ? 'hidden' : ''
})
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled, 'is-open': open }">
    <div class="container header__inner">
      <NuxtLink to="/" class="header__brand" aria-label="Paula Lemes Clínica de Podologia, página inicial">
        <BrandLogo compact />
      </NuxtLink>

      <nav class="header__nav" aria-label="Principal">
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" class="header__link">{{ item.label }}</NuxtLink>
      </nav>

      <div class="header__actions">
        <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn btn--primary btn--sm header__cta">
          <AppIcon name="whatsapp" />
          <span>Agendar</span>
        </a>
        <button
          class="header__toggle"
          type="button"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-if="open" id="mobile-menu" class="mobile">
        <nav class="container mobile__nav" aria-label="Menu">
          <NuxtLink
            v-for="(item, i) in nav"
            :key="item.to"
            :to="item.to"
            class="mobile__link"
            :style="{ '--i': i }"
            @click="open = false"
          >
            {{ item.label }}
            <AppIcon name="arrow" />
          </NuxtLink>
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn btn--primary btn--xl mobile__cta">
            <AppIcon name="whatsapp" /> Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  transition: background-color var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out),
    backdrop-filter var(--dur-med);
}
.header.is-scrolled,
.header.is-open {
  background: rgba(247, 243, 234, 0.82);
  backdrop-filter: saturate(1.4) blur(16px);
  -webkit-backdrop-filter: saturate(1.4) blur(16px);
  box-shadow: 0 1px 0 var(--line);
}
.header__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}
.header__brand {
  border-radius: var(--radius-md);
}
.header__nav {
  display: none;
  gap: var(--space-1);
}
.header__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: var(--control-md);
  padding-inline: var(--space-3);
  border-radius: var(--radius-pill);
  font-size: var(--text-14);
  font-weight: 500;
  color: var(--ink-soft);
  transition: color var(--dur-fast), background-color var(--dur-med) var(--ease-out);
}
.header__link:hover {
  color: var(--sage-900);
  background: rgba(139, 154, 107, 0.14);
}
.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.header__cta {
  display: none;
}
.header__toggle {
  display: grid;
  place-items: center;
  width: var(--control-lg);
  height: var(--control-lg);
  border-radius: 50%;
  transition: background-color var(--dur-med);
}
.header__toggle:hover {
  background: rgba(139, 154, 107, 0.16);
}
.header__toggle svg {
  width: 24px;
  height: 24px;
}

.mobile {
  position: fixed;
  inset: var(--header-h) 0 0 0;
  background: var(--cream-100);
  overflow-y: auto;
}
.mobile__nav {
  display: grid;
  gap: var(--space-1);
  padding-block: var(--space-4) var(--space-8);
}
.mobile__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--control-xl);
  font-family: var(--font-display);
  font-size: var(--text-30);
  border-bottom: 1px solid var(--line);
  animation: menu-in var(--dur-slow) var(--ease-out) both;
  animation-delay: calc(var(--i) * 60ms + 80ms);
}
.mobile__link svg {
  width: 24px;
  height: 24px;
  color: var(--sage-600);
}
.mobile__cta {
  margin-top: var(--space-5);
  width: 100%;
}
@keyframes menu-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}
.menu-enter-active,
.menu-leave-active {
  transition: opacity var(--dur-med) var(--ease-out);
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@media (min-width: 640px) {
  .header__cta {
    display: inline-flex;
  }
}
@media (min-width: 1024px) {
  .header__nav {
    display: flex;
  }
  .header__toggle {
    display: none;
  }
}
</style>
