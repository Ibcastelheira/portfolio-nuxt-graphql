<template>
  <footer
    class="border-t border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70"
  >
    <div
      class="container-page flex flex-col gap-4 py-6 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between"
    >
      <p class="flex flex-row items-center gap-2">
        <Icon icon="mdi:alpha-e-circle-outline" />
        {{ currentYear }} Igor Borges. Todos os direitos reservados.
      </p>
      <div class="flex items-center gap-4 text-xl">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="transition-colors hover:text-primary-600"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span class="sr-only">{{ link.label }}</span>
          <Icon :icon="link.icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { socialLinks } from '@/utils/socialLinks'

const currentYear = new Date().getFullYear()
const links = socialLinks
</script>
