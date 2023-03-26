import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuratedListProfileEntity } from "./curated-list-profile.entity";
import { CuratedListTagEntity } from "./curated-list-tag.entity";
import { TagEntity } from "./tag.entity";

@Entity('curated_lists')
export class CuratedListEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    title: string

    @Column({ type: 'varchar', length: 255 })
    sub_heading: String

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'varchar', length: 255 })
    seo_url: string;

    @Column({ type: "bit", width: 1 })
    is_active: number

    @OneToMany(() => CuratedListProfileEntity, profile => profile.curated_list)
    profiles: CuratedListProfileEntity[];

    @OneToMany(() => CuratedListTagEntity, curatedTag => curatedTag.list)
    listTags: CuratedListTagEntity[];

    @OneToMany(() => TagEntity, tag =>tag.curatedList)
    tags: TagEntity[];

}