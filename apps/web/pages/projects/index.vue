<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">Projects</h2>
      <button class="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">New project</button>
    </div>

    <div v-if="pending" class="space-y-3">
      <div v-for="i in 4" :key="i" class="h-20 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800/60" />
    </div>

    <div v-else-if="projects.length === 0" class="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-12 text-center dark:border-slate-700 dark:bg-slate-900/60">
      <p class="text-lg font-semibold">No projects in this workspace</p>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Start by creating a project for your first workflow or decision model.</p>
    </div>

    <div v-else class="space-y-3">
      <NuxtLink v-for="project in projects" :key="project.id" :to="`/projects/${project.id}`" class="block rounded-2xl border border-slate-200 bg-white/85 p-4 transition hover:border-brand-500 dark:border-slate-800 dark:bg-slate-900/75">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="font-semibold">{{ project.name }}</p>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ project.description || 'No description provided yet.' }}</p>
          </div>
          <span class="text-xs text-slate-500">Open →</span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types/domain'

const { request } = useApi()
const pending = ref(true)
const projects = ref<Project[]>([])

onMounted(async () => {
  try {
    projects.value = await request<Project[]>('/projects')
  } catch {
    projects.value = []
  } finally {
    pending.value = false
  }
})
</script>
