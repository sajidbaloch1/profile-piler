import { Module } from '@nestjs/common';
import {ElasticsearchModule} from '@nestjs/elasticsearch'
import { SearchBeService } from './search-be.service';
@Module({
    imports:[
        ElasticsearchModule.register({
            node:'http://localhost:9200'
        })
    ],
    providers: [SearchBeService],
})
export class SearchBeModule {}
