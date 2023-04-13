import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuratedLists } from "../curated-lists/curated_lists.entity";

@Entity('tags')
export class Tags {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', width: 255 })
    name: string
    @ManyToMany(() => CuratedLists, tag => tag.tags)
    curatedList: CuratedLists[]
}