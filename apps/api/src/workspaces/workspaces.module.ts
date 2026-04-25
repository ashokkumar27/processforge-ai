import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity, WorkspaceEntity } from '../entities'
import { WorkspacesController } from './workspaces.controller'
import { WorkspacesService } from './workspaces.service'

@Module({
  imports: [TypeOrmModule.forFeature([WorkspaceEntity, UserEntity])],
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
  exports: [WorkspacesService]
})
export class WorkspacesModule {}
