<template>
  <article
    class="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-subtle transition-transform hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900"
  >
    <header class="flex items-start justify-between gap-4">
      <div>
        <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
          {{ project.title }}
        </h3>
        <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          {{ project.description }}
        </p>
      </div>
      <Icon icon="solar:streets-map-point-bold-duotone" class="h-6 w-6 text-primary-500" />
    </header>

    <ul class="flex flex-wrap gap-2 text-sm">
      <li
        v-for="tech in project.techs"
        :key="tech"
        class="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
      >
        <Icon :icon="resolveTechIcon(tech)" class="h-4 w-4" />
        <span>{{ tech }}</span>
      </li>
    </ul>

    <footer class="mt-auto flex items-center gap-3 text-sm font-medium">
      <a
        v-if="project.repoUrl"
        :href="project.repoUrl"
        class="inline-flex items-center gap-1 text-primary-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:github" class="h-5 w-5" />
        Código
      </a>
      <a
        v-if="project.previewUrl"
        :href="project.previewUrl"
        class="inline-flex items-center gap-1 text-primary-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:open-in-new" class="h-5 w-5" />
        Demo
      </a>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Project } from '@/types/project'
import { resolveTechIcon } from '@/utils/techIcons'

defineProps<{
  project: Project
}>()
</script>
