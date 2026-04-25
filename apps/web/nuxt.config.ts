export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  typescript: {
    strict: true,
    typeCheck: false
  },
  app: {
    head: {
      title: 'ProcessForge AI',
      meta: [{ name: 'description', content: 'AI-native enterprise workflow and rules builder' }]
    }
  }
})
