import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Keywords } from './keywords.entity';

@Injectable()
export class KeywordsService {
    constructor(
        @InjectRepository(Keywords)
        private readonly keywordRepo: Repository<Keywords>
    ){}

    findAll(){
        return this.keywordRepo.find();
    }

    async createRow(data: any) {
        const newRow = await this.keywordRepo.create(data);
        return await this.keywordRepo.save(newRow);
      }
}
