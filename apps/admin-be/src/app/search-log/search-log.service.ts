import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ElasticSearchLog } from './search-log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SearchLogService {
    constructor(
        @InjectRepository(ElasticSearchLog)
        private readonly elasticSearchRepo: Repository<ElasticSearchLog>
    ) { }

    findAll(){
        return this.elasticSearchRepo.find();
    }
}
