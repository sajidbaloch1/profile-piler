import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoryBeController {
  @Get()
  index() {
    return 'hey';
  }
}
