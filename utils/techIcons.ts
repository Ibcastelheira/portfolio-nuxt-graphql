const defaultTechIcon = 'mdi:folder-text'

export const techIconMap: Record<string, string> = {
  nuxt: 'logos:nuxt-icon',
  vue: 'logos:vue',
  typescript: 'logos:typescript-icon',
  javascript: 'logos:javascript',
  tailwind: 'logos:tailwindcss-icon',
  graphql: 'logos:graphql',
  apollo: 'logos:apollo',
  node: 'logos:nodejs-icon'
}

export const resolveTechIcon = (tech: string) => {
  const key = tech.trim().toLowerCase()
  return techIconMap[key] || defaultTechIcon
}
