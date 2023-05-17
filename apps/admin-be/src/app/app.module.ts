import { Module, Provider } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { Jobs } from './jobs/jobs.entity';
import { KeywordsModule } from './keywords/keywords.module';
import { TagsModule } from './tags/tags.module';
import { FailedJobsModule } from './failed-jobs/failed-jobs.module';
import { CuratedListsModule } from './curated-lists/curated-lists.module';
import { CuratedLists } from './curated-lists/curated_lists.entity';
import { Keywords } from './keywords/keywords.entity';
import { Tags } from './tags/tags.entity';
import { CuratedListTagModule } from './curated-list-tag/curated-list-tag.module';
import { CuratedListProfileModule } from './curated-list-profile/curated-list-profile.module';
import { CuratedListProfileEntity } from './curated-list-profile/curated-list-profile.entity';
import { CuratedlistTag } from './curated-list-tag/curated-list-tag.entity';
import { SearchLogController } from './search-log/search-log.controller';
import { SearchLogService } from './search-log/search-log.service';
import { SearchLogModule } from './search-log/search-log.module';
import { ElasticSearchLog } from './search-log/search-log.entity';
import { FailedJob } from './failed-jobs/failed_jobs.entity';
import { createConnection } from 'net';
// import { async } from 'rxjs';

const data :Provider = {
  provide:'DATABASE_CONNECTION',
  useFactory: async () => await createConnection({
    type: 'mysql'
  })
}
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'profiler-piler',
      entities: [
        Jobs,
        CuratedLists,
        Keywords,
        Tags,
        FailedJob,
        CuratedListProfileEntity,
        CuratedlistTag,
        ElasticSearchLog,
      ],
      synchronize: false,
      // logging: true,
    }),
    JobsModule,
    KeywordsModule,
    TagsModule,
    FailedJobsModule,
    CuratedListsModule,
    CuratedListTagModule,
    CuratedListProfileModule,
    CuratedListProfileModule,
    CuratedListTagModule,
    SearchLogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
