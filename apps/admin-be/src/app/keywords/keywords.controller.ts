import { Body, Controller, Get, Post } from '@nestjs/common';
import { KeywordsService } from './keywords.service';

@Controller('keywords')
export class KeywordsController {
    constructor(
        private readonly keywordService: KeywordsService
    ) { }

    @Get()
    findAll() {
        return this.keywordService.findAll();
    }

    @Post()
    async createRow(@Body() data: any) {
        const newRow = await this.keywordService.createRow(data);
        return newRow;
    }
}
