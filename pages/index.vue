<template>
  <section class="container-page flex flex-col gap-16">
    <header class="flex flex-col gap-6 text-center sm:text-left">
      <span
        class="inline-flex items-center gap-2 self-center rounded-full bg-primary-100 px-4 py-1 text-sm font-medium text-primary-700 dark:bg-primary-500/10 dark:text-primary-300 sm:self-start"
      >
        Olá, eu sou Igor Borges
      </span>
      <h1 class="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
        Desenvolvedor
      </h1>
      <p class="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
        Tenho paixão por criar interfaces escaláveis, performáticas e centradas no usuário, unindo
        tecnologia, design e visão estratégica para gerar impacto real no negócio.
      </p>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-500"
        >
          Veja meus projetos
        </NuxtLink>
        <a
          href="mailto:ibcastelheira1995@gmail.com"
          class="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-primary-500 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-200"
        >
          ibcastelheira1995@gmail.com
        </a>
      </div>
    </header>

    <section
      class="grid gap-10 rounded-3xl border border-neutral-200 bg-white/80 p-10 dark:border-neutral-800 dark:bg-neutral-900/80"
    >
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-white">Sobre mim</h2>
      <p class="text-neutral-600 dark:text-neutral-300">
        Mais do que código, fazer algo que realmente faça sentido. Sempre segui essas palavras. Não
        faz sentido desenvolver uma funcionalidade que não será utilizada; é preciso entender as
        necessidades do usuário e transformar ideias em experiências consistentes.
      </p>
      <p class="text-neutral-600 dark:text-neutral-300">
        Experiência sólida como engenheiro de software focado em frontend, atuando com Vue.js,
        React.js e TypeScript e aplicando arquitetura limpa e boas práticas. Também desenvolvo apps
        móveis com Flutter e Dart e integro APIs REST, WebSockets, webhooks e chatbots para
        automatizar jornadas.
      </p>
      <p class="text-neutral-600 dark:text-neutral-300">
        Atuo em pipelines CI/CD, versionamento Git e rituais ágeis, com forte background em testes
        automatizados (Jest, Vue Test Utils, Selenium) e uso Python em soluções corporativas,
        colaborando ativamente em code reviews e refinamento técnico.
      </p>
      <div class="flex flex-wrap gap-3">
        <span
          class="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        >
          <Icon icon="logos:nuxt-icon" class="h-5 w-5" />
          Nuxt 3
        </span>
        <span
          class="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        >
          <Icon icon="logos:tailwindcss-icon" class="h-5 w-5" />
          Tailwind CSS
        </span>
        <span
          class="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        >
          <Icon icon="logos:graphql" class="h-5 w-5" />
          GraphQL
        </span>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
