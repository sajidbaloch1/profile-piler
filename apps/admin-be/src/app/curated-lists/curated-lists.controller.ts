import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CuratedListsService } from './curated-lists.service';

@Controller('curated-lists')
export class CuratedListsController {
  constructor(private readonly curatedService: CuratedListsService) {}

  // @Get()
  // findAll() {
  //   return this.curatedService.getAllCuratedLists();
  // }
  @Get()
  findAll() {
    return this.curatedService.getAllCuratedLists();
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

  // @Put(':id')
  // async updateRowById(@Param('id') id: string, @Body() updatedData: any) {
  //   const updatedRow = await this.curatedService.updateRowById(id, updatedData);
  //   return updatedRow;
  // }

  @Patch(':id')
  async isActiveRecord(@Param('id') id: number, @Body() isActive: boolean) {
    const updatedRow = await this.curatedService.updateStatus(id, isActive);
    return updatedRow;
  }
}
