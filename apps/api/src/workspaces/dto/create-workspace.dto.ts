export class CreateWorkspaceDto {
  name!: string
  environment?: 'draft' | 'staging' | 'production'
  ownerId!: string
}
