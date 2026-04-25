export type ProjectId = string

export interface WorkspaceSummary {
  id: string
  name: string
  environment: 'draft' | 'staging' | 'production'
}
