import { Controller, Get } from '@nestjs/common';
import { ProfileBeService } from './profile-be.service';

@Controller('profile-be')
export class ProfileBeController {
    constructor(
        private readonly profileService: ProfileBeService
    ){}

    @Get()
    get(){
        return this.profileService.getRecords()
    }
}
