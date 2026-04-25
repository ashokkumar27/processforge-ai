import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { WorkflowEntity } from './workflow.entity'

@Entity({ name: 'workflow_versions' })
export class WorkflowVersionEntity extends BaseEntity {
  @Column()
  version!: number

  @Column({ type: 'text', nullable: true })
  bpmnXml?: string

  @ManyToOne(() => WorkflowEntity, (workflow) => workflow.versions, { onDelete: 'CASCADE' })
  workflow!: WorkflowEntity
}
