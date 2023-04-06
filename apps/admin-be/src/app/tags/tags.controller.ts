import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(
        private readonly tagService: TagsService
    ) { }

    @Get()
    findAll() {
        return this.tagService.findAll();
    }

    @Post()
    async createRow(@Body() data: any) {
        const newRow = await this.tagService.createRow(data);
        return newRow;
    }
}
