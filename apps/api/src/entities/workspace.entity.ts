import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { UserEntity } from './user.entity'
import { ProjectEntity } from './project.entity'

@Entity({ name: 'workspaces' })
export class WorkspaceEntity extends BaseEntity {
  @Column()
  name!: string

  @Column({ default: 'draft' })
  environment!: 'draft' | 'staging' | 'production'

  @ManyToOne(() => UserEntity, (user) => user.workspaces, { nullable: false })
  owner!: UserEntity

  @OneToMany(() => ProjectEntity, (project) => project.workspace)
  projects!: ProjectEntity[]
}
