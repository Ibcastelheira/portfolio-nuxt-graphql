import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: 'Igor Borges | Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfólio pessoal criado com Nuxt 3, Tailwind CSS e Apollo Client.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Igor Borges | Portfolio' },
        {
          property: 'og:description',
          content: 'Descubra projetos, experiência e formas de contato de Igor Borges.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  runtimeConfig: {
    public: {
      graphqlEndpoint: process.env.NUXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://example.com/graphql'
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  compatibilityDate: '2024-04-03'
})
