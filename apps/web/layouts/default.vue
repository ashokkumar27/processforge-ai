<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-50 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
    <div class="flex min-h-screen">
      <aside class="hidden w-72 shrink-0 border-r border-slate-200/70 bg-white/70 p-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60 lg:block">
        <div class="mb-8 flex items-center gap-3">
          <div class="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-panel">PF</div>
          <div>
            <p class="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">ProcessForge</p>
            <h1 class="text-sm font-semibold">AI Studio</h1>
          </div>
        </div>
        <nav class="space-y-2">
          <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
            {{ item.label }}
          </NuxtLink>
        </nav>
      </aside>

      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <header class="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Workspace</p>
            <button class="mt-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-brand-500">
              Acme Operations ▾
            </button>
          </div>
          <button class="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            New Asset
          </button>
        </header>

        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Templates', to: '/templates' },
  { label: 'Governance', to: '/governance' },
  { label: 'Settings', to: '/settings' }
]
</script>
