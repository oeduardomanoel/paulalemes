<script setup lang="ts">
import type { Service } from '#shared/services'
defineProps<{ service: Service; index?: number }>()
</script>

<template>
  <NuxtLink :to="`/tratamentos/${service.slug}`" class="card">
    <span class="card__icon"><AppIcon :name="service.icon" /></span>
    <span class="card__body">
      <span class="card__head">
        <h3 class="card__title">{{ service.name }}</h3>
        <span v-if="service.technical" class="card__tech">{{ service.technical }}</span>
      </span>
      <p class="card__text">{{ service.card }}</p>
    </span>
    <span class="card__more">
      Saiba mais <AppIcon name="arrow" class="card__arrow" />
    </span>
  </NuxtLink>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  height: 100%;
  padding: var(--spacing-card);
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--line);
  overflow: hidden;
  isolation: isolate;
  transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out);
}
.card::after {
  content: '';
  position: absolute;
  z-index: -1;
  width: 240px;
  height: 240px;
  right: -120px;
  top: -120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(241, 198, 127, 0.45), transparent 70%);
  opacity: 0;
  transform: scale(0.6);
  transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);
  border-color: var(--sage-300);
  box-shadow: var(--shadow-lg);
}
.card:hover::after {
  opacity: 1;
  transform: scale(1);
}
.card__icon {
  display: grid;
  place-items: center;
  width: var(--control-xl);
  height: var(--control-xl);
  border-radius: 50%;
  background: var(--sage-100);
  color: var(--sage-700);
  transition: background-color var(--dur-med) var(--ease-out), color var(--dur-med), transform var(--dur-slow) var(--ease-out);
}
.card__icon svg {
  width: 24px;
  height: 24px;
}
.card:hover .card__icon {
  background: var(--sage-500);
  color: var(--cream-50);
  transform: rotate(-8deg) scale(1.04);
}
.card__body {
  display: grid;
  gap: var(--space-2);
  flex: 1;
}
.card__head {
  display: grid;
  gap: var(--space-1);
}
.card__title {
  font-size: var(--text-24);
}
.card__tech {
  font-size: var(--text-12);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--sage-600);
}
.card__text {
  font-size: var(--text-14);
  color: var(--muted);
  line-height: 1.6;
}
.card__more {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-14);
  font-weight: 600;
  color: var(--sage-700);
}
.card__arrow {
  width: 16px;
  height: 16px;
  transition: transform var(--dur-med) var(--ease-out);
}
.card:hover .card__arrow {
  transform: translateX(4px);
}
</style>
