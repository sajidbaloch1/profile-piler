import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CuratedLists } from "../curated-lists/curated_lists.entity";

@Entity('curated_list_tag')
export class CuratedlistTag{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'bigint', width: 19 })
    curated_list_id: number

    @Column()
    tag_id: number

    @ManyToOne(() => CuratedLists, list => list.listTags)
    @JoinColumn({ name: "curated_list_id" })
    list: CuratedLists
}