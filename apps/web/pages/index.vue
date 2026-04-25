<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-panel dark:border-slate-800 dark:bg-slate-900/75">
      <p class="text-sm font-semibold">Workspace dashboard</p>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">A real-time overview of process assets in the selected workspace.</p>
    </div>

    <div v-if="pending" class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div v-for="n in 6" :key="n" class="h-36 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800/60" />
    </div>

    <div v-else-if="cards.length === 0" class="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-10 text-center dark:border-slate-700 dark:bg-slate-900/60">
      <p class="text-lg font-semibold">No dashboard metrics yet</p>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Create your first project to start tracking workflows, decisions, and deployments.</p>
    </div>

    <div v-else class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article v-for="card in cards" :key="card.title" class="rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-panel dark:border-slate-800 dark:bg-slate-900/75">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{{ card.kicker }}</p>
        <h2 class="mt-2 text-lg font-semibold">{{ card.title }}</h2>
        <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ card.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const pending = ref(false)

const cards = [
  { kicker: 'Builder', title: 'Workflows', description: 'Design BPMN-driven process orchestration with iterative AI suggestions.' },
  { kicker: 'Policy', title: 'Decisions', description: 'Track decision models and DMN packages mapped to business policy domains.' },
  { kicker: 'Experience', title: 'Forms', description: 'Review current form assets attached to tasks and approval steps.' },
  { kicker: 'Release', title: 'Deployments', description: 'Inspect release health and deployment states across environments.' },
  { kicker: 'Operations', title: 'Runtime Monitor', description: 'View runtime status, in-flight cases, and failure trends.' },
  { kicker: 'Governance', title: 'Audit Logs', description: 'Observe traceability for edits, approvals, and deployments.' }
]
</script>
