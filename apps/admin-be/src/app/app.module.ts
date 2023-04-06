import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { JobsModule } from './jobs/jobs.module';
import { Jobs } from './jobs/jobs.entity';
import { KeywordsModule } from './keywords/keywords.module';
import { TagsModule } from './tags/tags.module';
import { FailedJobsModule } from './failed-jobs/failed-jobs.module';
import { CuratedListsModule } from './curated-lists/curated-lists.module';
import { CuratedLists } from './curated-lists/curated_lists.entity';
import { Keywords } from './keywords/keywords.entity';
import { Tags } from './tags/tags.entity';
import { FailedJobs } from './failed-jobs/failed_jobs.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'profile_piler',
      entities: [Jobs, CuratedLists, Keywords, Tags],
      synchronize: true,
    }),
    JobsModule, KeywordsModule, TagsModule, FailedJobsModule, CuratedListsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
