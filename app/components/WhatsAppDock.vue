<script setup lang="ts">
import { whatsappLink } from '#shared/site'
const visible = ref(false)
const onScroll = () => (visible.value = window.scrollY > 560)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <!-- Mobile: barra fixa inferior. Desktop: botão flutuante. -->
  <div class="dock" :class="{ 'is-visible': visible }">
    <a :href="whatsappLink()" target="_blank" rel="noopener" class="dock__btn" aria-label="Agendar avaliação pelo WhatsApp">
      <span class="dock__pulse" aria-hidden="true" />
      <AppIcon name="whatsapp" />
      <span class="dock__label">Agendar avaliação</span>
    </a>
  </div>
</template>

<style scoped>
.dock {
  position: fixed;
  z-index: 40;
  left: var(--space-3);
  right: var(--space-3);
  bottom: calc(var(--space-3) + env(safe-area-inset-bottom));
  transform: translateY(calc(100% + var(--space-4)));
  opacity: 0;
  transition: transform var(--dur-slow) var(--ease-out), opacity var(--dur-med) var(--ease-out);
  pointer-events: none;
}
.dock.is-visible {
  transform: none;
  opacity: 1;
  pointer-events: auto;
}
.dock__btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  height: var(--control-xl);
  border-radius: var(--radius-pill);
  background: var(--sage-800);
  color: var(--cream-50);
  font-weight: 600;
  font-size: var(--text-16);
  box-shadow: var(--shadow-lg);
  transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out);
}
.dock__btn svg {
  width: 24px;
  height: 24px;
}
.dock__btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg), 0 0 0 6px rgba(241, 198, 127, 0.35);
}
.dock__pulse {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 rgba(241, 198, 127, 0.6);
  animation: pulse 2.6s var(--ease-out) infinite;
}
@keyframes pulse {
  70%,
  100% {
    box-shadow: 0 0 0 16px rgba(241, 198, 127, 0);
  }
}
@media (min-width: 1024px) {
  .dock {
    left: auto;
    right: var(--space-5);
    bottom: var(--space-5);
  }
  .dock__btn {
    width: var(--control-xl);
  }
  .dock__label {
    position: absolute;
    right: calc(100% + var(--space-3));
    top: 50%;
    display: inline-flex;
    align-items: center;
    height: var(--control-md);
    padding-inline: var(--space-3);
    border-radius: var(--radius-pill);
    background: var(--cream-50);
    color: var(--sage-900);
    font-size: var(--text-14);
    white-space: nowrap;
    box-shadow: var(--shadow-md);
    opacity: 0;
    transform: translate(8px, -50%);
    pointer-events: none;
    transition: opacity var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out);
  }
  .dock__btn:hover .dock__label,
  .dock__btn:focus-visible .dock__label {
    opacity: 1;
    transform: translate(0, -50%);
  }
}
</style>
