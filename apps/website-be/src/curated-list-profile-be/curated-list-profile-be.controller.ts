import { Controller, Get } from '@nestjs/common';
import { CuratedListProfileBeService } from './curated-list-profile-be.service';

@Controller('curated-list-profile-be')
export class CuratedListProfileBeController {
    constructor(
        private readonly curatedListProfile: CuratedListProfileBeService
    ) { }

    @Get()
    findAll() {
        return this.curatedListProfile.findAll();
    }
}
