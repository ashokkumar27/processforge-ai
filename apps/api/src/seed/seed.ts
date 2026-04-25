import { DataSource } from 'typeorm'
import { buildDataSourceOptions } from '../database/typeorm.config'
import { ProjectEntity, UserEntity, WorkspaceEntity } from '../entities'

async function seed() {
  const dataSource = new DataSource(buildDataSourceOptions())
  await dataSource.initialize()

  const userRepository = dataSource.getRepository(UserEntity)
  const workspaceRepository = dataSource.getRepository(WorkspaceEntity)
  const projectRepository = dataSource.getRepository(ProjectEntity)

  let user = await userRepository.findOneBy({ email: 'owner@processforge.ai' })
  if (!user) {
    user = await userRepository.save(
      userRepository.create({
        email: 'owner@processforge.ai',
        displayName: 'ProcessForge Owner'
      })
    )
  }

  let workspace = await workspaceRepository.findOne({ where: { name: 'Acme Operations' }, relations: ['owner'] })
  if (!workspace) {
    workspace = await workspaceRepository.save(
      workspaceRepository.create({
        name: 'Acme Operations',
        environment: 'draft',
        owner: user
      })
    )
  }

  const projectCount = await projectRepository.count({ where: { workspace: { id: workspace.id } } })
  if (projectCount === 0) {
    await projectRepository.save([
      projectRepository.create({
        name: 'Vendor Onboarding',
        description: 'Initial onboarding flow for third-party vendors',
        workspace
      }),
      projectRepository.create({
        name: 'Expense Approval',
        description: 'Policy-based approval workflow for employee expenses',
        workspace
      })
    ])
  }

  await dataSource.destroy()
  console.log('Seed completed.')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
