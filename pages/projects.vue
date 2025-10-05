<template>
  <section class="container-page space-y-10">
    <header class="flex flex-col gap-4 text-center sm:text-left">
      <h1 class="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
        Projetos em destaque
      </h1>
      <p class="text-neutral-600 dark:text-neutral-300">
        Uma seleção de trabalhos recentes que entregam valor através de interfaces intuitivas e
        tecnologias modernas.
      </p>
    </header>

    <div v-if="loading" class="grid gap-6 sm:grid-cols-2">
      <div
        v-for="index in 4"
        :key="index"
        class="animate-pulse rounded-3xl border border-neutral-200 bg-neutral-100/80 p-6 dark:border-neutral-800 dark:bg-neutral-800/60"
      >
        <div class="h-6 w-2/3 rounded bg-neutral-200 dark:bg-neutral-700"></div>
        <div class="mt-4 h-4 w-full rounded bg-neutral-200 dark:bg-neutral-700"></div>
        <div class="mt-2 h-4 w-4/5 rounded bg-neutral-200 dark:bg-neutral-700"></div>
      </div>
    </div>

    <p
      v-else-if="error"
      class="rounded-2xl border border-red-300 bg-red-50 p-4 text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-200"
    >
      Não foi possível carregar os projetos agora. Tente novamente em instantes.
    </p>

    <div v-else class="grid gap-6 sm:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.id ?? project.title"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { gql, type ApolloClient } from '@apollo/client/core'
import { useAsyncData, useNuxtApp } from 'nuxt/app'
import ProjectCard from '@/components/ProjectCard.vue'
import type { Project } from '@/types/project'
import getProjectsQuery from '@/graphql/queries/getProjects.gql?raw'

const documentNode = gql(getProjectsQuery)

const { $apollo } = useNuxtApp()
const apolloClient = $apollo as ApolloClient<unknown>

const { data, pending, error } = await useAsyncData('projects', async () => {
  const { data } = await apolloClient.query<{ projects: Project[] }>({
    query: documentNode
  })

  return data.projects
})

const loading = computed(() => pending.value)

const projects = computed(
  () =>
    data.value ?? [
      {
        id: 'placeholder-1',
        title: 'Design System Escalável',
        description:
          'Componentização completa de UI com documentação automatizada e integração com Storybook.',
        techs: ['Nuxt', 'Tailwind', 'TypeScript'],
        repoUrl: 'https://github.com/your-user/design-system',
        previewUrl: 'https://design-system.example.com'
      },
      {
        id: 'placeholder-2',
        title: 'Dashboard de Analytics',
        description:
          'Visualizações interativas de dados em real-time com autenticação e controles avançados.',
        techs: ['Vue', 'GraphQL', 'Apollo'],
        repoUrl: 'https://github.com/your-user/analytics-dashboard',
        previewUrl: 'https://analytics.example.com'
      }
    ]
)
</script>
