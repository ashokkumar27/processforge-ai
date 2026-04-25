import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { ProjectEntity } from './project.entity'

@Entity({ name: 'forms' })
export class FormEntity extends BaseEntity {
  @Column()
  name!: string

  @Column({ type: 'jsonb', nullable: true })
  schema?: Record<string, unknown>

  @ManyToOne(() => ProjectEntity, (project) => project.forms, { onDelete: 'CASCADE' })
  project!: ProjectEntity
}
