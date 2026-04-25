import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity, WorkspaceEntity } from '../entities'
import { CreateWorkspaceDto } from './dto/create-workspace.dto'
import { UpdateWorkspaceDto } from './dto/update-workspace.dto'

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(WorkspaceEntity)
    private readonly workspaceRepository: Repository<WorkspaceEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  findAll() {
    return this.workspaceRepository.find({ relations: ['owner'] })
  }

  async findOne(id: string) {
    const workspace = await this.workspaceRepository.findOne({ where: { id }, relations: ['owner'] })
    if (!workspace) throw new NotFoundException(`Workspace ${id} not found`)
    return workspace
  }

  async create(dto: CreateWorkspaceDto) {
    const owner = await this.userRepository.findOneBy({ id: dto.ownerId })
    if (!owner) throw new NotFoundException(`User ${dto.ownerId} not found`)
    const workspace = this.workspaceRepository.create({
      name: dto.name,
      environment: dto.environment ?? 'draft',
      owner
    })
    return this.workspaceRepository.save(workspace)
  }

  async update(id: string, dto: UpdateWorkspaceDto) {
    const workspace = await this.findOne(id)
    Object.assign(workspace, dto)
    return this.workspaceRepository.save(workspace)
  }

  async remove(id: string) {
    const workspace = await this.findOne(id)
    await this.workspaceRepository.remove(workspace)
    return { deleted: true }
  }
}
