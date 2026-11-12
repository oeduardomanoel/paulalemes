<script setup lang="ts">
defineProps<{ items: { q: string; a: string }[] }>()
</script>

<template>
  <div class="faq">
    <details v-for="(item, i) in items" :key="item.q" v-reveal="{ delay: i * 60 }" class="faq__item" name="faq">
      <summary class="faq__q">
        <span>{{ item.q }}</span>
        <span class="faq__icon" aria-hidden="true"><AppIcon name="plus" /></span>
      </summary>
      <div class="faq__a"><p>{{ item.a }}</p></div>
    </details>
  </div>
</template>

<style scoped>
.faq {
  display: grid;
  gap: var(--space-2);
}
.faq__item {
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--line);
  transition: border-color var(--dur-med), box-shadow var(--dur-med) var(--ease-out), background-color var(--dur-med);
}
.faq__item:hover {
  border-color: var(--sage-300);
}
.faq__item[open] {
  box-shadow: var(--shadow-md);
  border-color: var(--sage-300);
}
.faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  min-height: var(--control-xl);
  padding: var(--space-3) var(--space-4);
  font-weight: 600;
  font-size: var(--text-16);
  line-height: 1.4;
  cursor: pointer;
  list-style: none;
  border-radius: inherit;
}
.faq__q::-webkit-details-marker {
  display: none;
}
.faq__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: var(--control-sm);
  height: var(--control-sm);
  border-radius: 50%;
  background: var(--sage-100);
  color: var(--sage-700);
  transition: transform var(--dur-med) var(--ease-out), background-color var(--dur-med);
}
.faq__icon svg {
  width: 16px;
  height: 16px;
}
.faq__item:hover .faq__icon {
  background: var(--sage-200);
}
.faq__item[open] .faq__icon {
  transform: rotate(45deg);
  background: var(--sage-500);
  color: var(--cream-50);
}
.faq__a {
  padding: 0 var(--space-4) var(--space-4);
  color: var(--ink-soft);
  max-width: 72ch;
}
.faq__item[open] .faq__a {
  animation: faq-in var(--dur-med) var(--ease-out);
}
@keyframes faq-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
