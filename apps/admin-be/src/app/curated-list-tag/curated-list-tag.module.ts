import { Module } from '@nestjs/common';
import { CuratedListTagService } from './curated-list-tag.service';
import { CuratedListTagController } from './curated-list-tag.controller';
import { CuratedlistTag } from './curated-list-tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CuratedlistTag])],
  providers: [CuratedListTagService],
  controllers: [CuratedListTagController]
})
export class CuratedListTagModule { }
