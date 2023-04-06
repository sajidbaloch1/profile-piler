import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CuratedListsService } from './curated-lists.service';

@Controller('curated-lists')
export class CuratedListsController {

    constructor(
        private readonly curatedService: CuratedListsService
    ) { }


    @Get()
    findAll() {
        return this.curatedService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: any) {
        return this.curatedService.findOne(id);
    }

    @Post()
    async createRow(@Body() data: any) {
        const newRow = await this.curatedService.createRow(data);
        return newRow;
    }

    @Put(':id')
    async updateRowById(@Param('id') id: string, @Body() updatedData: any) {
        const updatedRow = await this.curatedService.updateRowById(id, updatedData);
        return updatedRow;
    }
}
