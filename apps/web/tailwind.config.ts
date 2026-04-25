import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      boxShadow: {
        panel: '0 10px 30px -15px rgb(15 23 42 / 35%)'
      },
      colors: {
        brand: {
          500: '#5B7CFF',
          600: '#4B6CF4'
        }
      }
    }
  },
  plugins: []
} satisfies Config
