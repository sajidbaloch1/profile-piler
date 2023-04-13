import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FailedJob } from './failed_jobs.entity';

@Injectable()
export class FailedJobsService {
    constructor(
        @InjectRepository(FailedJob)
        private readonly failedJobRepo: Repository<FailedJob>
    ){}

    findAll(){
       return this.failedJobRepo.find()
    }
}
