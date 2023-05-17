import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { KeywordEntity } from '../entities/keyword.entity';
import { KeywordBeModule } from '../keyword-be/keyword-be.module';
import { MapperModule } from '../mapper/mapper.module';
import { CuratedListEntity } from '../entities/curated-list.entity';
import { CuratedListBeModule } from '../curated-list-be/curated-list-be.module';
import { CuratedListProfileEntity } from '../entities/curated-list-profile.entity';
import { CuratedListTagEntity } from '../entities/curated-list-tag.entity';
import { CuratedListProfileBeModule } from '../curated-list-profile-be/curated-list-profile-be.module';
import { TagEntity } from '../entities/tag.entity';
import { ProfileBeModule } from '../profile-be/profile-be.module';
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
    CuratedListBeModule,
    CuratedListProfileBeModule,
    ProfileBeModule,
    ConfigModule,
    MapperModule,
    // TypeOrmModule.forRoot({
    //   ...defaultOptions,
    //   database: 'social_entity_db',
    //   entities: [],
    // } as any), 
    // TypeOrmModule.forRoot({
    //   ...defaultOptions,
    //   name: 'YT',
    //   database: 'youtube_data',
    //   entities: [],
    // } as any),
    // TypeOrmModule.forRoot({
    //   ...defaultOptions,
    //   database: 'quora',
    //   name: 'Q',
    //   entities: [],
    // } as any),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      database: 'profiler-piler',
      name: 'PP',
      entities: [
        KeywordEntity,
        CuratedListEntity,
        CuratedListProfileEntity,
        CuratedListTagEntity,
        TagEntity
      ],
    } as any)
  ],
})
export class WebsiteBeModule { }
