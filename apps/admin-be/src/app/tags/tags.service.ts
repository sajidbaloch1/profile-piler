import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tags } from './tags.entity';

@Injectable()
export class TagsService {

    constructor(
        @InjectRepository(Tags)
        private readonly tagRepo: Repository<Tags>
    ){}

    findAll(){
        return this.tagRepo.find()
    }

    async createRow(data: any) {
        const newRow = await this.tagRepo.create(data);
        return await this.tagRepo.save(newRow);
      }
}
