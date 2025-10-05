import type { ApolloClient } from '@apollo/client/core'

declare module '#app' {
  interface NuxtApp {
    $apollo: ApolloClient<unknown>
  }
}

declare module 'nuxt/app' {
  interface NuxtApp {
    $apollo: ApolloClient<unknown>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $apollo: ApolloClient<unknown>
  }
}
