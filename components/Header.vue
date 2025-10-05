<template>
  <header
    class="border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70"
  >
    <div class="container-page flex items-center justify-between py-4">
      <NuxtLink to="/" class="font-semibold text-lg sm:text-xl">Igor Borges</NuxtLink>
      <nav class="hidden items-center gap-4 text-sm sm:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
          :class="{
            'bg-neutral-900 text-white dark:bg-neutral-200 dark:text-neutral-900':
              route.path === item.to
          }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-2">
        <ButtonThemeToggle :is-dark="isDark" @toggle="toggleTheme" />
        <button
          class="inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium hover:border-primary-500 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-200"
          @click="goToProjects"
        >
          Ver projetos
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { navigateTo, useRoute } from 'nuxt/app'
import { useTheme } from '@/composables/useTheme'
import ButtonThemeToggle from '@/components/buttons/ButtonThemeToggle.vue'

const route = useRoute()
const { isDark, toggleTheme } = useTheme()

const navigation = computed(() => [
  { to: '/', label: 'Início' },
  { to: '/projects', label: 'Projetos' },
  { to: '/contact', label: 'Contato' }
])

const goToProjects = () => {
  void navigateTo('/projects')
}
</script>
