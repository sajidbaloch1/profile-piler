import { Controller, Get, Param, Query } from '@nestjs/common';
import { CuratedListBeService } from './curated-list-be.service';

@Controller('curated-lists')
export class CuratedListBeController {
    constructor(
        private readonly curatedService: CuratedListBeService
    ) { }
    @Get()
    getTages(@Query('tag') tag: string) {
        return this.curatedService.getIndex(tag);
    }

    @Get(':seo_url')
    getTagesSeoUrl(@Param('seo_url') seoUrl: string) {
        // console.log(seoUrl);
        // return "hello"
        return this.curatedService.getShow(seoUrl)
    }

}


