import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { WorkspaceEntity } from './workspace.entity'

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  email!: string

  @Column({ name: 'display_name' })
  displayName!: string

  @OneToMany(() => WorkspaceEntity, (workspace) => workspace.owner)
  workspaces!: WorkspaceEntity[]
}
