export interface Workspace {
  id: string
  name: string
  environment: 'draft' | 'staging' | 'production'
}

export interface Project {
  id: string
  name: string
  description?: string
  workspace?: Workspace
}
