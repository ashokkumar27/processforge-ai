import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { ProjectEntity } from './project.entity'
import { WorkflowVersionEntity } from './workflow-version.entity'

@Entity({ name: 'workflows' })
export class WorkflowEntity extends BaseEntity {
  @Column()
  name!: string

  @ManyToOne(() => ProjectEntity, (project) => project.workflows, { onDelete: 'CASCADE' })
  project!: ProjectEntity

  @OneToMany(() => WorkflowVersionEntity, (version) => version.workflow)
  versions!: WorkflowVersionEntity[]
}
