import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from '../dto/post-dto';
import { CuratedListEntity } from '../entities/curated-list.entity';

@Injectable()
export class CuratedListBeService {
    constructor(
        @InjectRepository(CuratedListEntity, 'PP')
        private readonly curatedRepo: Repository<CuratedListEntity>
    ) { }
    getIndex(tag: string) {
        const isActive = true;
        const listQuery = this.curatedRepo.createQueryBuilder('curated_lists')
            .leftJoinAndSelect('curated_lists.profiles', 'profiles')
            .leftJoinAndSelect('curated_lists.listTags', 'listTags')
            .where('curated_lists.is_active = :isActive', { isActive: 1 });
        if (tag) {
            listQuery.andWhere('curated_lists.tags.curated_list_id = :tag', { tag })
        }
        return listQuery.getMany();
    }

    async getShow(seoUrl: string) {
        const isActive = true;
        const list = await this.curatedRepo.createQueryBuilder('curated_lists')
          .leftJoinAndSelect('curated_lists.profiles', 'profiles')
          .leftJoinAndSelect('curated_lists.listTags', 'listTags')
          .where('curated_lists.seo_url = :seoUrl', { seoUrl })
          .andWhere('curated_lists.is_active = :isActive', { isActive })
          .getOne();
      
        if (!list) {
          return {
            success: false,
            error: "List not found in our records"
          };
        }
      
        return new PostDto(list);
      }
// @Get('index')
//   getIndex(@Res() res: Response): void {
//     const filePath = 'js/profile.json';
//     const fileStream = fs.createReadStream(filePath);

//     res.setHeader('Content-Type', 'application/json');
//     fileStream.pipe(res);
//   }




}