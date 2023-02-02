import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FailedJobs } from './failed-jobs.entity';

@Injectable()
export class FailedJobsService {
    constructor(
        @InjectRepository(FailedJobs)
        private readonly failedJobRepo: Repository<FailedJobs>
    ){}

    findAll(){
       return this.failedJobRepo.find()
    }
}
