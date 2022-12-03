import { Controller, Get } from '@nestjs/common';
import { KeywordBeService } from './keyword-be.service';

@Controller('keywords')
export class KeywordBeController {
  constructor(private keywordService: KeywordBeService) {}

  @Get('categories')
  async getCategories() {
    return this.keywordService.findByCategories();
  }
}
