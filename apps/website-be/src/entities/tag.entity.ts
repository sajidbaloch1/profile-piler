import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuratedListTagEntity } from "./curated-list-tag.entity";
import { CuratedListEntity } from "./curated-list.entity";

@Entity('tags')
export class TagEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    name: string

    @OneToMany(() => CuratedListEntity, tag => tag.tags)
    curatedList: CuratedListEntity
}