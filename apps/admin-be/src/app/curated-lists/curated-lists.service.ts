import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuratedLists } from './curated_lists.entity';
@Injectable()
export class CuratedListsService {
  constructor(
    @InjectRepository(CuratedLists)
    private readonly curatedRepo: Repository<CuratedLists>
  ) {}

  async getAllCuratedLists(): Promise<CuratedLists[]> {
    const listQuery = this.curatedRepo
      .createQueryBuilder('curated_lists')
      .leftJoinAndSelect('curated_lists.tags', 'tags')
      .leftJoinAndSelect('curated_lists.listTags', 'listTags');
    return listQuery.getMany();
  }
  
  async createRow(data: any) {
    const newRow = await this.curatedRepo.create(data);
    return await this.curatedRepo.save(newRow);
  }

  async findOne(id: any) {
    return await this.curatedRepo.findOne({
      where: { id },
    });
  }

  async updateStatus(id: any, isActive: boolean): Promise<CuratedLists> {
    try {
      const curated = await this.curatedRepo.findOneOrFail({
        where: { id: id },
      });
      curated.is_active = isActive;
      const updatedCurated = await this.curatedRepo.save(curated);
      return updatedCurated;
    } catch (error) {
      console.error(error); // log the error
      throw new Error('Unable to update status'); // throw a custom exception
    }
  }
}
