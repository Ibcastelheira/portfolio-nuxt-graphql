import { computed, watch } from 'vue'
import { useState } from 'nuxt/app'

const STORAGE_KEY = 'portfolio-theme-preference'

type Theme = 'light' | 'dark'

const applyTheme = (value: Theme) => {
  if (!process.client) return

  const root = document.documentElement
  root.classList.toggle('dark', value === 'dark')
  root.dataset.theme = value
}

const resolveInitialTheme = (): Theme => {
  if (!process.client) return 'light'

  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export const useTheme = () => {
  const theme = useState<Theme>('theme', resolveInitialTheme)

  if (process.client) {
    watch(
      theme,
      (value) => {
        localStorage.setItem(STORAGE_KEY, value)
        applyTheme(value)
      },
      { immediate: true }
    )
  }

  const isDark = computed(() => theme.value === 'dark')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  const setTheme = (value: Theme) => {
    theme.value = value
  }

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme
  }
}
