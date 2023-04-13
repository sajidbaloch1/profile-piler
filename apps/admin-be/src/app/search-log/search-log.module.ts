import { Module } from '@nestjs/common';
import { SearchLogController } from './search-log.controller';
import { SearchLogService } from './search-log.service';
import { ElasticSearchLog } from './search-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ElasticSearchLog])],
    controllers: [SearchLogController],
    providers: [SearchLogService]
})
export class SearchLogModule {}
