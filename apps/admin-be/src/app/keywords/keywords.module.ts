import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeywordsController } from './keywords.controller';
import { Keywords } from './keywords.entity';
import { KeywordsService } from './keywords.service';

@Module({
  imports: [TypeOrmModule.forFeature([Keywords])],
  controllers: [KeywordsController],
  providers: [KeywordsService]
})
export class KeywordsModule {}
