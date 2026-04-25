import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './database/typeorm.config'
import { ProjectsModule } from './projects/projects.module'
import { WorkspacesModule } from './workspaces/workspaces.module'

@Module({
  imports: [TypeOrmModule.forRootAsync({ useFactory: typeOrmConfig }), WorkspacesModule, ProjectsModule]
})
export class AppModule {}
