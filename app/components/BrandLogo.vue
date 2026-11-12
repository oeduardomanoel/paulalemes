<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'dark' | 'light'; compact?: boolean }>(), { tone: 'dark', compact: false })
</script>

<template>
  <span class="brand" :class="[`brand--${tone}`, { 'brand--compact': compact }]">
    <span class="brand__badge">
      <LogoMark class="brand__mark" />
    </span>
    <span class="brand__text">
      <span class="brand__name">Paula Lemes</span>
      <span class="brand__sub">Clínica de Podologia</span>
    </span>
  </span>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
}
.brand__badge {
  display: grid;
  place-items: center;
  width: var(--control-lg);
  height: var(--control-lg);
  border-radius: 50%;
  background: var(--sage-500);
  color: var(--cream-50);
  box-shadow: 0 0 0 2px var(--cream-50), 0 0 0 3px var(--sage-500);
  transition: box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out);
}
.brand__mark {
  width: 24px;
  height: 27px;
}
.brand:hover .brand__badge {
  transform: rotate(-6deg);
  box-shadow: 0 0 0 2px var(--cream-50), 0 0 0 3px var(--sage-500), 0 0 24px 4px rgba(241, 198, 127, 0.6);
}
.brand__text {
  display: grid;
  gap: 2px;
  line-height: 1;
}
.brand__name {
  font-family: var(--font-display);
  font-size: var(--text-24);
  letter-spacing: -0.01em;
}
.brand__sub {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}
.brand--light {
  color: var(--cream-50);
}
.brand--light .brand__sub {
  color: var(--sage-200);
}
.brand--light .brand__badge {
  box-shadow: 0 0 0 2px var(--sage-800), 0 0 0 3px var(--sage-400);
}
.brand--compact .brand__name {
  font-size: var(--text-20);
}
</style>
