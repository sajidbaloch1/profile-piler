import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuratedListsController } from './curated-lists.controller';
import { CuratedListsService } from './curated-lists.service';
import { CuratedLists } from './curated_lists.entity';

@Module({
imports: [TypeOrmModule.forFeature([CuratedLists])],
  controllers: [CuratedListsController],
  providers: [CuratedListsService]
})
export class CuratedListsModule {}
