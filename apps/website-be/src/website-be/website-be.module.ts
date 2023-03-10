import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { KeywordEntity } from '../entities/keyword.entity';
import { KeywordBeModule } from '../keyword-be/keyword-be.module';
import { MapperModule } from '../mapper/mapper.module';
const defaultOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  synchronize: false
}
@Module({
  imports: [
    KeywordBeModule,
    ConfigModule,
    MapperModule,
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'social_entity_db',
      entities: [],
    } as any), TypeOrmModule.forRoot({
      ...defaultOptions,
      name: 'YT',
      database: 'youtube_data',
      entities: [],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'quora',
      name: 'Q',
      entities: [],
    } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'profile_piler',
      name: 'PP',
      entities: [KeywordEntity],
    } as any)
  ],
})
export class WebsiteBeModule { }
