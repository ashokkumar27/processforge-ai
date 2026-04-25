export class UpdateWorkspaceDto {
  name?: string
  environment?: 'draft' | 'staging' | 'production'
}
