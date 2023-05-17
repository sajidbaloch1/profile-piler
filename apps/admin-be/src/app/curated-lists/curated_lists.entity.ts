import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CuratedlistTag } from '../curated-list-tag/curated-list-tag.entity';
import { Tags } from '../tags/tags.entity';
import { CuratedListProfileEntity } from '../curated-list-profile/curated-list-profile.entity';

@Entity('curated_lists')
export class CuratedLists {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  sub_heading: String;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  seo_url: string;

  @Column({ type: 'bit', width: 1 })
  is_active: boolean;

  @OneToMany(() => CuratedListProfileEntity, (profile) => profile.curated_list)
  profiles: CuratedListProfileEntity[];

  @OneToMany(() => CuratedlistTag, (curatedTag) => curatedTag.list)
  listTags: CuratedlistTag[];

  @ManyToMany(() => Tags)
  @JoinTable()
  tags: Tags[];
}
