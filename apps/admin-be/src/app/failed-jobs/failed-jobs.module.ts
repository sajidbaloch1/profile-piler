import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FailedJobsController } from './failed-jobs.controller';
import { FailedJobs } from './failed-jobs.entity';
import { FailedJobsService } from './failed-jobs.service';

@Module({
  imports:[TypeOrmModule.forFeature([FailedJobs])],
  controllers: [FailedJobsController],
  providers: [FailedJobsService]
})
export class FailedJobsModule {}
