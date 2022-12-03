import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { KeywordEntity } from '../entities/keyword.entity';
import { KeywordBeController } from './keyword-be.controller';
import { KeywordBeService } from './keyword-be.service';

@Module({
  imports: [TypeOrmModule.forFeature([KeywordEntity])],
  controllers: [KeywordBeController],
  providers: [KeywordBeService],
  exports: [KeywordBeService],
})
export class KeywordBeModule {}
