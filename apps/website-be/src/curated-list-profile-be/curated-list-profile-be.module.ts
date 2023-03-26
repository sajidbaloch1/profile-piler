import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuratedListProfileEntity } from '../entities/curated-list-profile.entity';
import { CuratedListProfileBeController } from './curated-list-profile-be.controller';
import { CuratedListProfileBeService } from './curated-list-profile-be.service';

@Module({
  imports:[TypeOrmModule.forFeature([CuratedListProfileEntity],"PP")],
  providers: [CuratedListProfileBeService],
  controllers:[CuratedListProfileBeController]
})
export class CuratedListProfileBeModule {}
