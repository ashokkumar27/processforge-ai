import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'
import { ProjectEntity } from './project.entity'
import { DecisionVersionEntity } from './decision-version.entity'

@Entity({ name: 'decisions' })
export class DecisionEntity extends BaseEntity {
  @Column()
  name!: string

  @ManyToOne(() => ProjectEntity, (project) => project.decisions, { onDelete: 'CASCADE' })
  project!: ProjectEntity

  @OneToMany(() => DecisionVersionEntity, (version) => version.decision)
  versions!: DecisionVersionEntity[]
}
