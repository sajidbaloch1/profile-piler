import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuratedLists } from './curated_lists.entity';

@Injectable()
export class CuratedListsService {

    constructor
        (
            @InjectRepository(CuratedLists)
            private readonly curatedRepo: Repository<CuratedLists>
        ) { }


    findAll() {
        return this.curatedRepo.find()
    }

}
