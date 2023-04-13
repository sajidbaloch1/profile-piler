import { Module } from '@nestjs/common';
import { CuratedListProfileService } from './curated-list-profile.service';
import { CuratedListProfileController } from './curated-list-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuratedListProfileEntity } from './curated-list-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuratedListProfileEntity])],
  providers: [CuratedListProfileService],
  controllers: [CuratedListProfileController]
})
export class CuratedListProfileModule { }
