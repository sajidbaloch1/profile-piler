import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CuratedListEntity } from "./curated-list.entity";

@Entity('curated_list_tag')
export class CuratedListTagEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'bigint', width: 19 })
    curated_list_id: number

    @Column({ type: 'bigint', width: 19 })
    tag_id: number

    @ManyToOne(() => CuratedListEntity, list => list.listTags)
    @JoinColumn({ name: "curated_list_id" })
    list: CuratedListEntity

}