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
          <button
            v-for="item in navItems"
            :key="item"
            class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <span>{{ item }}</span>
            <span class="text-xs text-slate-400">›</span>
          </button>
        </nav>

        <div class="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm dark:border-indigo-900/50 dark:bg-indigo-950/40">
          <p class="font-semibold text-indigo-700 dark:text-indigo-300">Starter workspace</p>
          <p class="mt-2 text-slate-600 dark:text-slate-300">
            Scaffold stage only. Connect engines and AI generation in subsequent phases.
          </p>
        </div>
      </aside>

      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <header class="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Workspace</p>
            <div class="mt-1 flex items-center gap-3">
              <button class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-brand-500">
                Acme Operations ▾
              </button>
              <span class="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                Draft environment
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white">
              Search
            </button>
            <button class="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              New Asset
            </button>
          </div>
        </header>

        <section class="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="card in cards"
            :key="card.title"
            class="group rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-panel transition hover:-translate-y-0.5 hover:border-brand-500/60 dark:border-slate-800 dark:bg-slate-900/75"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{{ card.kicker }}</p>
            <h2 class="mt-2 text-lg font-semibold">{{ card.title }}</h2>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ card.description }}</p>
            <button class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-500">
              Open <span aria-hidden="true">→</span>
            </button>
          </article>
        </section>

        <section class="grid gap-4 lg:grid-cols-3">
          <div class="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-panel dark:border-slate-800 dark:bg-slate-900/75 lg:col-span-2">
            <p class="text-sm font-semibold">Project dashboard</p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Welcome to ProcessForge AI. This initial shell provides structure, navigation, and dashboard components. Workflow, rules, and runtime integrations will be added incrementally.
            </p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-panel dark:border-slate-800 dark:bg-slate-900/75">
            <p class="text-sm font-semibold">Theme readiness</p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Designed with neutral palettes, accessible contrast, and dark/light mode support.</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const navItems = ['Dashboard', 'Workspaces', 'Templates', 'Integrations', 'Governance', 'Settings']

const cards = [
  { kicker: 'Builder', title: 'Workflows', description: 'Design and refine BPMN-based workflows with AI-assisted decomposition.' },
  { kicker: 'Policy', title: 'Decisions', description: 'Model decision tables and rules for eligibility, routing, and compliance.' },
  { kicker: 'Experience', title: 'Forms', description: 'Create user forms and task experiences for enterprise process steps.' },
  { kicker: 'Release', title: 'Deployments', description: 'Package and deploy approved artifacts to runtime engines.' },
  { kicker: 'Operations', title: 'Runtime Monitor', description: 'Track process instances, SLAs, and failed jobs across environments.' },
  { kicker: 'Governance', title: 'Audit Logs', description: 'Review change history, approvals, and execution traces for compliance.' }
]
</script>
