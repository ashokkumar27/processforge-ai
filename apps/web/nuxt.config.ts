export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  typescript: {
    strict: true,
    typeCheck: false
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? 'http://localhost:3001/api'
    }
  },
  app: {
    head: {
      title: 'ProcessForge AI',
      meta: [{ name: 'description', content: 'AI-native enterprise workflow and rules builder' }]
    }
  }
})
