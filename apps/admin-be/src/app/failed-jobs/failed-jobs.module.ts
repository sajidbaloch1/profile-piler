import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FailedJobsController } from './failed-jobs.controller';
import { FailedJobsService } from './failed-jobs.service';
import { FailedJob } from './failed_jobs.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FailedJob])],
  controllers: [FailedJobsController],
  providers: [FailedJobsService]
})
export class FailedJobsModule {}
