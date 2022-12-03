import { Controller, Get } from '@nestjs/common';
import { KeywordBeService } from './keyword-be.service';

@Controller()
export class KeywordBeController {
  constructor(private keywordService: KeywordBeService) {}

  @Get('keywords')
  async getKeywords() {
    return this.keywordService.findAll();
  }


  @Get('categories')
  async getCategories() {
    return this.keywordService.findByCategories();
  }
}
