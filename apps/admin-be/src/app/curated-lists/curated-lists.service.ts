import { Injectable, NotFoundException } from '@nestjs/common';
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

    async createRow(data: any) {
        const newRow = await this.curatedRepo.create(data);
        return await this.curatedRepo.save(newRow);
    }

    async findOne(id: any) {
        return await this.curatedRepo.findOne({
            where: { id }
        })
    }

    async updateRowById(id: any, updatedData: any) {
        this.curatedRepo.update(id, updatedData);
    }
}