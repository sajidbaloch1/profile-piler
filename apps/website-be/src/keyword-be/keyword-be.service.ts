import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { KeywordEntity } from '../entities/keyword.entity';

@Injectable()
export class KeywordBeService {
  constructor(
    @InjectRepository(KeywordEntity)
    private keywordsRepository: Repository<KeywordEntity>
  ) {}

  findAll(): Promise<KeywordEntity[]> {
    return this.keywordsRepository.find();
  }

  async findByCategories(source: string = null) {
    let queryBuilder = this.keywordsRepository
      .createQueryBuilder()
      .groupBy('category')
      .select('category, count(*) as count');
    if (source) {
      queryBuilder = queryBuilder.where({ soruce: source });
    }
    const categories = await queryBuilder.getRawMany<{ category: string }>();
    const groupedResults = [];
    for (let i = 0; i < categories.length; i++) {
      const row = categories[i];
      if (!row.category) {
        return;
      }

      groupedResults.push({
        category: row.category,
        keywords: await this.keywordsRepository
          .createQueryBuilder()
          .select('keyword, results_count')
          .where({ category: row.category })
          .orderBy('results_count', 'DESC')
          .getRawMany(),
      });
    }

    return groupedResults;
  }
}
