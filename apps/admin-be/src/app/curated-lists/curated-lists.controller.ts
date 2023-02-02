import { Controller, Get } from '@nestjs/common';
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
}
