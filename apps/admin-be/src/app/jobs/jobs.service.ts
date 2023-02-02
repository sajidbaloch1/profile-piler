import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, QueryBuilder, Repository } from 'typeorm';
import { Jobs } from './jobs.entity';

@Injectable()
export class JobsService {
    
    constructor(
        @InjectRepository(Jobs)
        private readonly jobRepo: Repository<Jobs>
    ){}

    findAll(){
        return this.jobRepo.find();
    }

}
