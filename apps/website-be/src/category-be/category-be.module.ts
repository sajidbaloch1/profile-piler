import { Module } from '@nestjs/common';
import { CategoryBeController } from './category-be.controller';

@Module({
  controllers: [CategoryBeController],
})
export class CategoryBeModule {}
