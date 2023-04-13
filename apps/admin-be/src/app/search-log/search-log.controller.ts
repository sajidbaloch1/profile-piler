import { Controller, Get } from '@nestjs/common';
import { SearchLogService } from './search-log.service';

@Controller('search-log')
export class SearchLogController {
    constructor(
        private readonly elasticSearchService: SearchLogService
    ) { }

    @Get()
    findAll() {
        return this.elasticSearchService.findAll();
    }
}
