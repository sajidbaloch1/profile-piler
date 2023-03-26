import { Module } from '@nestjs/common';
import { ProfileBeService } from './profile-be.service';
import { ProfileBeController } from './profile-be.controller';

@Module({
  providers: [ProfileBeService],
  controllers: [ProfileBeController]
})
export class ProfileBeModule {}
