import { Module } from '@nestjs/common';
import { CuratedListBeService } from './curated-list-be.service';
import { CuratedListBeController } from './curated-list-be.controller';
import { CuratedListEntity } from '../entities/curated-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuratedListProfileEntity } from '../entities/curated-list-profile.entity';
import { CuratedListTagEntity } from '../entities/curated-list-tag.entity';
import { TagEntity } from '../entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature(
    [
      CuratedListEntity,
      CuratedListProfileEntity,
      CuratedListTagEntity,
      TagEntity
    ],
    'PP'
  )],
  providers: [CuratedListBeService],
  controllers: [CuratedListBeController]
})
export class CuratedListBeModule { }
