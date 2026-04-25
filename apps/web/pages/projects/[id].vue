<template>
  <section class="space-y-4">
    <NuxtLink to="/projects" class="text-sm font-medium text-brand-600">← Back to projects</NuxtLink>

    <div v-if="pending" class="space-y-3">
      <div class="h-8 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div class="h-24 animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-800/60" />
    </div>

    <div v-else-if="!project" class="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-10 text-center dark:border-slate-700 dark:bg-slate-900/60">
      <p class="text-lg font-semibold">Project not found</p>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">The selected project may have been moved or deleted.</p>
    </div>

    <div v-else class="space-y-4">
      <div class="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-panel dark:border-slate-800 dark:bg-slate-900/75">
        <h1 class="text-2xl font-semibold">{{ project.name }}</h1>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ project.description || 'No project description yet.' }}</p>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <article v-for="item in panels" :key="item.title" class="rounded-2xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/75">
          <p class="text-sm font-semibold">{{ item.title }}</p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types/domain'

const route = useRoute()
const { request } = useApi()

const pending = ref(true)
const project = ref<Project | null>(null)

const panels = [
  { title: 'Workflows', description: 'Versioned process models and drafts linked to this project.' },
  { title: 'Decisions', description: 'Decision tables and policy model versions for this domain.' },
  { title: 'Deployments', description: 'Latest release records and environment rollout status.' }
]

onMounted(async () => {
  try {
    project.value = await request<Project>(`/projects/${route.params.id}`)
  } catch {
    project.value = null
  } finally {
    pending.value = false
  }
})
</script>
