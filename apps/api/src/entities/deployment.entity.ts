import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { ProjectEntity } from './project.entity'

@Entity({ name: 'deployments' })
export class DeploymentEntity extends BaseEntity {
  @Column({ default: 'draft' })
  status!: 'draft' | 'deployed' | 'failed'

  @Column({ nullable: true })
  environment?: string

  @ManyToOne(() => ProjectEntity, (project) => project.deployments, { onDelete: 'CASCADE' })
  project!: ProjectEntity
}
