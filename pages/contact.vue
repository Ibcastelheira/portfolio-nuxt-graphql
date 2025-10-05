<template>
  <section class="container-page space-y-12">
    <header class="flex flex-col gap-4 text-center sm:text-left">
      <h1 class="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
        Vamos conversar
      </h1>
      <p class="text-neutral-600 dark:text-neutral-300">
        Preencha o formulário abaixo ou entre em contato pelas redes sociais. Eu respondo em até
        48h.
      </p>
    </header>

    <form
      class="space-y-6 rounded-3xl border border-neutral-200 bg-white/90 p-8 dark:border-neutral-800 dark:bg-neutral-900/80"
    >
      <div class="grid gap-6 sm:grid-cols-2">
        <label class="space-y-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Nome
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            class="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3 text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200/60 dark:border-neutral-700 dark:text-white"
          />
        </label>
        <label class="space-y-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Email
          <input
            type="email"
            name="email"
            placeholder="voce@email.com"
            class="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3 text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200/60 dark:border-neutral-700 dark:text-white"
          />
        </label>
      </div>
      <label class="space-y-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
        Mensagem
        <textarea
          name="message"
          rows="5"
          placeholder="Como posso ajudar no seu próximo projeto?"
          class="w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3 text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200/60 dark:border-neutral-700 dark:text-white"
        ></textarea>
      </label>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-500"
      >
        <Icon icon="mdi:send" class="h-4 w-4" />
        Enviar mensagem
      </button>
    </form>

    <section>
      <h2 class="text-xl font-semibold text-neutral-900 dark:text-white">Redes sociais</h2>
      <ul class="mt-4 flex flex-wrap gap-4 text-sm">
        <li v-for="link in socialLinks" :key="link.label">
          <a
            :href="link.href"
            class="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-neutral-700 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon :icon="link.icon" class="h-5 w-5" />
            {{ link.label }}
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { socialLinks } from '@/utils/socialLinks'
</script>
