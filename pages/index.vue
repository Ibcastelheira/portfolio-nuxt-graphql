<template>
  <section class="container-page flex flex-col gap-20 pb-16">
    <header
      class="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-white/80 px-6 py-16 shadow-xl shadow-primary-500/10 dark:border-neutral-800 dark:bg-neutral-900/80 sm:px-12 sm:py-20"
    >
      <span
        class="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary-400/30 blur-3xl dark:bg-primary-500/40"
        aria-hidden="true"
      ></span>
      <span
        class="pointer-events-none absolute bottom-[-25%] right-[-5%] h-80 w-80 rounded-full bg-teal-400/30 blur-[140px] dark:bg-teal-500/30"
        aria-hidden="true"
      ></span>
      <span
        class="pointer-events-none absolute right-6 top-6 hidden text-[8rem] font-black uppercase tracking-tighter text-neutral-900/5 dark:text-white/5 sm:block"
        aria-hidden="true"
      >
        IB
      </span>

      <div class="relative z-10 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <p class="text-xs uppercase tracking-[0.55em] text-neutral-500 dark:text-neutral-400">
          Front-end · Produto digital
        </p>
        <h1
          class="max-w-3xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
        >
          Construo experiências digitais vibrantes que conectam pessoas e negócios.
        </h1>
        <p class="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          Transformo estratégia de produto em interfaces elegantes, acessíveis e performáticas. Do
          discovery ao deploy, mergulho nos dados, experimento rápido e uso design systems para
          entregar valor de forma consistente.
        </p>
        <p class="max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          Entre uma sprint e outra, coleciono boas histórias com tecnologia, música e fotografia.
          Gosto de times colaborativos, rituais bem definidos e de manter o farol ligado no impacto
          que cada entrega gera para quem usa.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <NuxtLink
            to="/projects"
            class="inline-flex items-center justify-center rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/40 transition hover:-translate-y-0.5 hover:bg-primary-500"
          >
            Veja projetos em produção
          </NuxtLink>
          <a
            :href="`mailto:${email}`"
            class="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-3 text-sm font-semibold text-neutral-700 transition hover:border-primary-500 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-200"
          >
            Vamos conversar
          </a>
        </div>
        <a
          href="#sobre"
          class="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition hover:text-primary-600 dark:text-neutral-300"
        >
          Saiba mais sobre mim
          <Icon
            icon="mdi:arrow-top-right-thin"
            class="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
        <div class="mt-6 flex items-center gap-5 text-neutral-500 dark:text-neutral-400">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="text-xl transition hover:text-primary-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="sr-only">{{ link.label }}</span>
            <Icon :icon="link.icon" />
          </a>
        </div>
      </div>
    </header>

    <section
      id="sobre"
      class="rounded-[2.5rem] border border-neutral-200 bg-white/80 px-6 py-12 shadow-xl shadow-primary-500/5 dark:border-neutral-800 dark:bg-neutral-900/80 sm:px-12"
    >
      <div class="grid gap-12">
        <div class="space-y-10">
          <div class="space-y-6">
            <h2 class="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
              Sobre mim
            </h2>
            <p class="text-neutral-600 dark:text-neutral-300">
              Mais do que escrever código, meu foco está em fazer cada entrega ter propósito. Isso
              significa entender pessoas, alinhar estratégia com stakeholders, validar hipóteses e
              só então desenhar uma solução que faça sentido para o negócio.
            </p>
            <p class="text-neutral-600 dark:text-neutral-300">
              Hoje atuo como engenheiro de software focado em frontend com Vue.js, Nuxt 3 e
              TypeScript, navegando por arquitetura limpa, testes automatizados e integrações com
              GraphQL, REST e WebSockets. Também tenho vivido o universo mobile com Flutter, além de
              automatizar rotinas com Python e pipelines CI/CD.
            </p>
            <p class="text-neutral-600 dark:text-neutral-300">
              Busco ambientes onde tecnologia, design e negócio caminham juntos. Gosto de formar
              times multidisciplinares, facilitar rituais ágeis e manter a cadência de evolução do
              produto sem abrir mão da qualidade.
            </p>
          </div>
          <ul class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <li
              v-for="highlight in highlights"
              :key="highlight.title"
              class="rounded-2xl border border-neutral-200 bg-white/60 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900/70"
            >
              <h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                {{ highlight.title }}
              </h3>
              <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                {{ highlight.description }}
              </p>
            </li>
          </ul>
        </div>

        <aside
          class="flex h-fit flex-col gap-6 rounded-2xl border border-neutral-200 bg-white/60 p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-900/70"
        >
          <div class="space-y-3">
            <h3 class="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
              Competências em destaque
            </h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-300">
              UI/UX, arquitetura front-end, integração de APIs, testes (Jest, Vue
              Test Utils, Selenium), automações com Python e liderança técnica com foco em cultura de
              feedback.
            </p>
          </div>
          <div class="space-y-3">
            <h3 class="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400">
              Stacks
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="item in stack"
                :key="item"
                class="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition dark:bg-neutral-800 dark:text-neutral-200"
              >
                <Icon v-if="itemIconMap[item]" :icon="itemIconMap[item]" class="h-5 w-5" />
                {{ item }}
              </span>
            </div>
          </div>
          <div class="rounded-2xl border border-dashed border-primary-400/60 bg-primary-50/60 p-6 text-sm text-primary-700 dark:border-primary-500/50 dark:bg-primary-500/10 dark:text-primary-200">
            <p class="font-semibold uppercase tracking-[0.3em]">Disponível para desafios</p>
            <p class="mt-2 text-primary-700/80 dark:text-primary-100/80">
              Quer levar o seu produto para outro nível? Vamos conversar sobre estratégia, design
              system, migrações para Nuxt 3 ou otimização de performance.
            </p>
          </div>
        </aside>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { socialLinks } from '@/utils/socialLinks'

const email = 'ibcastelheira1995@gmail.com'

const highlights = [
  {
    title: 'Produto & Front-end',
    description:
      'Planejo experiências ponta a ponta com foco em entregar valor medível, unindo estratégia, design system e engenharia.'
  },
  {
    title: 'UX pragmático',
    description:
      'Uso discovery, protótipos e métricas para validar hipóteses cedo, simplificando fluxos e reduzindo atrito para quem usa.'
  },
  {
    title: 'Operação enxuta',
    description:
      'Implanto padrões, testes, automações e observabilidade para manter qualidade alta enquanto o produto escala.'
  }
]

const stack = [
  'Nuxt 3',
  'TypeScript',
  'Tailwind CSS',
  'GraphQL',
  'Flutter',
  'Python',
  'CI/CD',
  'Design Systems'
]

const itemIconMap: Record<string, string> = {
  'Nuxt 3': 'logos:nuxt-icon',
  TypeScript: 'logos:typescript-icon',
  'Tailwind CSS': 'logos:tailwindcss-icon',
  GraphQL: 'logos:graphql',
  Flutter: 'logos:flutter',
  Python: 'logos:python',
  'CI/CD': 'mdi:repeat-variant',
  'Design Systems': 'mdi:shape-outline'
}

const links = socialLinks
</script>
