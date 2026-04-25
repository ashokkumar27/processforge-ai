import { NotFoundException } from '@nestjs/common'
import { WorkspacesService } from '../src/workspaces/workspaces.service'

describe('WorkspacesService', () => {
  const workspaceRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    remove: jest.fn()
  }
  const userRepository = {
    findOneBy: jest.fn()
  }

  const service = new WorkspacesService(workspaceRepository as never, userRepository as never)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('creates a workspace when owner exists', async () => {
    userRepository.findOneBy.mockResolvedValue({ id: 'u-1' })
    workspaceRepository.create.mockReturnValue({ id: 'w-1', name: 'Ops' })
    workspaceRepository.save.mockResolvedValue({ id: 'w-1', name: 'Ops' })

    const result = await service.create({ name: 'Ops', ownerId: 'u-1' })

    expect(result.id).toBe('w-1')
    expect(workspaceRepository.create).toHaveBeenCalled()
  })

  it('throws when owner is missing', async () => {
    userRepository.findOneBy.mockResolvedValue(null)

    await expect(service.create({ name: 'Ops', ownerId: 'missing' })).rejects.toBeInstanceOf(NotFoundException)
  })
})
