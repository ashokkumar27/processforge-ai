export interface WorkflowBlueprint {
  id: string
  name: string
  status: 'draft' | 'review' | 'approved'
}

export const WORKFLOW_ENGINE_TARGETS = ['flowable', 'camunda', 'temporal'] as const
