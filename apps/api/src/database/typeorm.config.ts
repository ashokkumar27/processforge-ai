import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'
import { ENTITIES } from '../entities'

export const buildDataSourceOptions = (): DataSourceOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USER ?? 'processforge',
  password: process.env.DB_PASSWORD ?? 'processforge',
  database: process.env.DB_NAME ?? 'processforge',
  entities: ENTITIES,
  synchronize: true,
  logging: false
})

export const typeOrmConfig = (): TypeOrmModuleOptions => buildDataSourceOptions()
