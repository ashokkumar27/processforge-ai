import { AuditLogEntity } from './audit-log.entity'
import { DecisionEntity } from './decision.entity'
import { DecisionVersionEntity } from './decision-version.entity'
import { DeploymentEntity } from './deployment.entity'
import { FormEntity } from './form.entity'
import { ProjectEntity } from './project.entity'
import { UserEntity } from './user.entity'
import { WorkflowEntity } from './workflow.entity'
import { WorkflowVersionEntity } from './workflow-version.entity'
import { WorkspaceEntity } from './workspace.entity'

export const ENTITIES = [
  UserEntity,
  WorkspaceEntity,
  ProjectEntity,
  WorkflowEntity,
  WorkflowVersionEntity,
  DecisionEntity,
  DecisionVersionEntity,
  FormEntity,
  DeploymentEntity,
  AuditLogEntity
]

export {
  AuditLogEntity,
  DecisionEntity,
  DecisionVersionEntity,
  DeploymentEntity,
  FormEntity,
  ProjectEntity,
  UserEntity,
  WorkflowEntity,
  WorkflowVersionEntity,
  WorkspaceEntity
}
