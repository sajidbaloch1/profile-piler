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

    async createRow(data: any) {
        const newRow = await this.curatedRepo.create(data);
        return await this.curatedRepo.save(newRow);
      }

    async findOne(id: any) {
        // console.log(id)
        return await this.curatedRepo.findOne({
            where: { id }
        })
    }

    async updateRowById(id: any, updatedData: any) {
        const row = await this.curatedRepo.findOne(id);

        if (!row) {
            throw new Error('Row not found');
        }

        const updatedRow = Object.assign(row, updatedData);
        return await this.curatedRepo.save(updatedRow);
    }

}
