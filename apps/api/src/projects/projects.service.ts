import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProjectEntity, WorkspaceEntity } from '../entities'
import { CreateProjectDto } from './dto/create-project.dto'
import { UpdateProjectDto } from './dto/update-project.dto'

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectsRepository: Repository<ProjectEntity>,
    @InjectRepository(WorkspaceEntity)
    private readonly workspacesRepository: Repository<WorkspaceEntity>
  ) {}

  findAll() {
    return this.projectsRepository.find({ relations: ['workspace'] })
  }

  async findOne(id: string) {
    const project = await this.projectsRepository.findOne({ where: { id }, relations: ['workspace'] })
    if (!project) throw new NotFoundException(`Project ${id} not found`)
    return project
  }

  async create(dto: CreateProjectDto) {
    const workspace = await this.workspacesRepository.findOneBy({ id: dto.workspaceId })
    if (!workspace) throw new NotFoundException(`Workspace ${dto.workspaceId} not found`)

    const project = this.projectsRepository.create({
      name: dto.name,
      description: dto.description,
      workspace
    })

    return this.projectsRepository.save(project)
  }

  async update(id: string, dto: UpdateProjectDto) {
    const project = await this.findOne(id)
    Object.assign(project, dto)
    return this.projectsRepository.save(project)
  }

  async remove(id: string) {
    const project = await this.findOne(id)
    await this.projectsRepository.remove(project)
    return { deleted: true }
  }
}
