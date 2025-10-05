<template>
  <button
    class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-200"
    type="button"
    @click="$emit('toggle')"
    :aria-label="isDark ? 'Ativar tema claro' : 'Ativar tema escuro'"
  >
    <Icon v-if="isDark" icon="ph:sun-dim" class="h-5 w-5" />
    <Icon v-else icon="ph:moon" class="h-5 w-5" />
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  isDark: boolean
}>()

defineEmits<{
  (event: 'toggle'): void
}>()
</script>
