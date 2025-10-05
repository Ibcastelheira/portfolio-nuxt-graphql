import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import fetch from 'cross-fetch'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const graphqlEndpoint =
    typeof config.public.graphqlEndpoint === 'string'
      ? config.public.graphqlEndpoint
      : 'https://example.com/graphql'

  const httpLink = createHttpLink({
    uri: graphqlEndpoint,
    fetch
  })

  const cache = new InMemoryCache()

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    connectToDevTools: process.dev
  })

  nuxtApp.provide('apollo', apolloClient)
})
