import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { DecisionEntity } from './decision.entity'

@Entity({ name: 'decision_versions' })
export class DecisionVersionEntity extends BaseEntity {
  @Column()
  version!: number

  @Column({ type: 'text', nullable: true })
  dmnXml?: string

  @ManyToOne(() => DecisionEntity, (decision) => decision.versions, { onDelete: 'CASCADE' })
  decision!: DecisionEntity
}
