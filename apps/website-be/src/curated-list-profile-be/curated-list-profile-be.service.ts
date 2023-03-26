import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuratedListProfileEntity } from '../entities/curated-list-profile.entity';

@Injectable()
export class CuratedListProfileBeService {
    constructor(
        @InjectRepository(CuratedListProfileEntity, 'PP')
        private readonly curatedRepo: Repository<CuratedListProfileEntity>
    ) { }

    findAll() {
        return this.curatedRepo.find()
    }
}
