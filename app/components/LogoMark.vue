<script setup lang="ts">
/** Símbolo da marca redesenhado em vetor: pé com coração que vira infinito. */
withDefaults(defineProps<{ color?: string; title?: string }>(), {
  color: 'currentColor',
  title: '',
})
</script>

<template>
  <svg viewBox="0 0 100 112" fill="none" :role="title ? 'img' : undefined" :aria-hidden="title ? undefined : 'true'">
    <title v-if="title">{{ title }}</title>
    <g :fill="color">
      <ellipse cx="33" cy="15" rx="6.6" ry="8.6" transform="rotate(-12 33 15)" />
      <ellipse cx="46.5" cy="9.5" rx="4.8" ry="5.8" />
      <ellipse cx="57.5" cy="11" rx="4.1" ry="5" />
      <ellipse cx="66.5" cy="16.5" rx="3.5" ry="4.2" transform="rotate(15 66.5 16.5)" />
      <ellipse cx="73.5" cy="24" rx="3" ry="3.5" transform="rotate(25 73.5 24)" />
    </g>
    <path
      class="logo-stroke"
      d="M60 63 C55 67 47 71 42.5 78 C37 87 40 100 50 100 C60 100 63 88 57 80 C51 72 35 63 32.5 49 C30.5 38 43.5 32 50 42 C56.5 32 71 36 69.5 48 C68.5 56 62 61 56 66"
      :stroke="color"
      stroke-width="4.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      pathLength="1"
    />
  </svg>
</template>
