<script setup lang="ts">
/** Ícones de traço único, 24px, stroke 1.5. */
defineProps<{ name: string }>()
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'whatsapp'">
      <path d="M3.5 20.5l1.2-4.1A8.5 8.5 0 1 1 8 19.6l-4.5.9z" />
      <path d="M9 8.5c0 3 2.5 6.5 6.5 6.5l1-1.6-2-1-1 .9c-1.2-.5-2.3-1.6-2.8-2.8l.9-1-1-2-1.6 1z" />
    </template>
    <template v-else-if="name === 'arrow'"><path d="M5 12h14M13 6l6 6-6 6" /></template>
    <template v-else-if="name === 'arrow-up-right'"><path d="M7 17L17 7M9 7h8v8" /></template>
    <template v-else-if="name === 'star'"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" fill="currentColor" stroke="none" /></template>
    <template v-else-if="name === 'pin'"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></template>
    <template v-else-if="name === 'clock'"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></template>
    <template v-else-if="name === 'phone'"><path d="M5 4h3.5l1.5 4-2 1.5a10 10 0 0 0 6.5 6.5L16 14l4 1.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4z" /></template>
    <template v-else-if="name === 'instagram'"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".8" fill="currentColor" /></template>
    <template v-else-if="name === 'check'"><path d="M5 12.5l4.5 4.5L19 7.5" /></template>
    <template v-else-if="name === 'plus'"><path d="M12 5v14M5 12h14" /></template>
    <template v-else-if="name === 'menu'"><path d="M4 8h16M4 16h16" /></template>
    <template v-else-if="name === 'close'"><path d="M6 6l12 12M18 6L6 18" /></template>
    <template v-else-if="name === 'shield'"><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></template>
    <template v-else-if="name === 'heart'"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z" /></template>
    <template v-else-if="name === 'chat'"><path d="M4.5 18.5V7a2.5 2.5 0 0 1 2.5-2.5h10A2.5 2.5 0 0 1 19.5 7v7a2.5 2.5 0 0 1-2.5 2.5H8z" /><path d="M8.5 9.5h7M8.5 12.5h4.5" /></template>
    <template v-else-if="name === 'nail'"><path d="M8 20V9a4 4 0 0 1 8 0v11" /><path d="M8 9.5c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" /><path d="M5.5 12.5l2.5 1M18.5 12.5l-2.5 1" /></template>
    <template v-else-if="name === 'corner'"><path d="M8 20V9a4 4 0 0 1 8 0v11" /><circle cx="16" cy="11" r="2.2" /><path d="M8 9.5c1.2.8 2.6 1.2 4 1.2" /></template>
    <template v-else-if="name === 'callus'"><path d="M7 20c-1.5-3-2-6.5-.5-10S12 4 15 5.5s3 5.5 2 9-2.5 5.5-2.5 5.5" /><ellipse cx="11.5" cy="15.5" rx="2.5" ry="1.8" /></template>
    <template v-else-if="name === 'dot'"><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="3" /><path d="M11 11.2h.01M13 12.8h.01" /></template>
    <template v-else-if="name === 'drop'"><path d="M8 20V9a4 4 0 0 1 8 0v11" /><path d="M10 13.5c.6-1.6 3.4-1.6 4 0" /><path d="M10 16.5h4" /></template>
    <template v-else-if="name === 'hand'"><path d="M7 11V6.5a1.5 1.5 0 0 1 3 0V10m0-4.5v-1a1.5 1.5 0 0 1 3 0V10m0-4a1.5 1.5 0 0 1 3 0v4.5m0-2.5a1.5 1.5 0 0 1 3 0v5.5a6.5 6.5 0 0 1-6.5 6.5h-.5a6.5 6.5 0 0 1-5.6-3.2L4.5 13a1.5 1.5 0 0 1 2.5-1.6L8 13" /></template>
    <template v-else-if="name === 'home'"><path d="M4 11l8-6.5 8 6.5" /><path d="M6 9.5V19.5h12V9.5" /><path d="M12 17s-2.8-1.7-2.8-3.6a1.5 1.5 0 0 1 2.8-.8 1.5 1.5 0 0 1 2.8.8c0 1.9-2.8 3.6-2.8 3.6z" /></template>
    <template v-else-if="name === 'gloss'"><path d="M9 3.5h6l-.8 5H9.8z" /><rect x="7.5" y="8.5" width="9" height="12" rx="2.5" /><path d="M10.5 12v5" /></template>
    <template v-else-if="name === 'sparkle'"><path d="M12 3.5l1.8 5.2 5.2 1.8-5.2 1.8L12 17.5l-1.8-5.2L5 10.5l5.2-1.8z" /></template>
  </svg>
</template>
