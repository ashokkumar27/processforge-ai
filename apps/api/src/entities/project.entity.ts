import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { WorkspaceEntity } from './workspace.entity'
import { WorkflowEntity } from './workflow.entity'
import { DecisionEntity } from './decision.entity'
import { FormEntity } from './form.entity'
import { DeploymentEntity } from './deployment.entity'

@Entity({ name: 'projects' })
export class ProjectEntity extends BaseEntity {
  @Column()
  name!: string

  @Column({ type: 'text', nullable: true })
  description?: string

  @ManyToOne(() => WorkspaceEntity, (workspace) => workspace.projects, { nullable: false, onDelete: 'CASCADE' })
  workspace!: WorkspaceEntity

  @OneToMany(() => WorkflowEntity, (workflow) => workflow.project)
  workflows!: WorkflowEntity[]

  @OneToMany(() => DecisionEntity, (decision) => decision.project)
  decisions!: DecisionEntity[]

  @OneToMany(() => FormEntity, (form) => form.project)
  forms!: FormEntity[]

  @OneToMany(() => DeploymentEntity, (deployment) => deployment.project)
  deployments!: DeploymentEntity[]
}
