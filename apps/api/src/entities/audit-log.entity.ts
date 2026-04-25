import { Column, Entity } from 'typeorm'
import { BaseEntity } from './base.entity'

@Entity({ name: 'audit_logs' })
export class AuditLogEntity extends BaseEntity {
  @Column()
  actor!: string

  @Column()
  action!: string

  @Column({ type: 'jsonb', nullable: true })
  metadata?: Record<string, unknown>
}
