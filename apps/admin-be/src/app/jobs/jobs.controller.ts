import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {

    constructor(
        private readonly jobSerice: JobsService
    ){}

    @Get()
    findAll(){
        return this.jobSerice.findAll()
    }

}
