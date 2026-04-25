import { NotFoundException } from '@nestjs/common'
import { ProjectsService } from '../src/projects/projects.service'

describe('ProjectsService', () => {
  const projectRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    remove: jest.fn()
  }
  const workspaceRepository = {
    findOneBy: jest.fn()
  }

  const service = new ProjectsService(projectRepository as never, workspaceRepository as never)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('creates a project when workspace exists', async () => {
    workspaceRepository.findOneBy.mockResolvedValue({ id: 'ws-1' })
    projectRepository.create.mockReturnValue({ id: 'p-1', name: 'Project A' })
    projectRepository.save.mockResolvedValue({ id: 'p-1', name: 'Project A' })

    const result = await service.create({ name: 'Project A', workspaceId: 'ws-1' })

    expect(result.id).toBe('p-1')
    expect(projectRepository.create).toHaveBeenCalled()
  })

  it('throws when workspace does not exist', async () => {
    workspaceRepository.findOneBy.mockResolvedValue(null)

    await expect(service.create({ name: 'Project A', workspaceId: 'missing' })).rejects.toBeInstanceOf(NotFoundException)
  })
})
