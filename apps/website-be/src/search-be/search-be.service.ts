import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchBeService {
    constructor(
        private readonly elasticService: ElasticsearchService
    ) { }

    get(){
        // this.elasticService
    }
}
