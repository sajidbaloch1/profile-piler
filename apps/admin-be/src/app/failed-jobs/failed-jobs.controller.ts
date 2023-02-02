import { Controller, Get } from '@nestjs/common';
import { FailedJobsService } from './failed-jobs.service';

@Controller('failed-jobs')
export class FailedJobsController {
    constructor(
        private readonly failedJobSerivce: FailedJobsService
    ) { }

    @Get()
    findAll() {
        return this.failedJobSerivce.findAll();
    }

}
