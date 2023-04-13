import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuratedLists } from "../curated-lists/curated_lists.entity";

@Entity('curated_list_profiles')
export class CuratedListProfileEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'bigint', width: 19 })
    curated_list_id: number

    @Column({ type: 'varchar', length: 500 })
    profile_id: String

    @Column({ type: 'longtext' })
    profile_json: string;

    @Column({ type: 'timestamp', default: 'CURRENT_TIMESTAMP' })
    updated_at: string;

    @ManyToOne(() => CuratedLists, list => list.profiles)
    @JoinColumn({ name: "curated_list_id" })
    curated_list: CuratedLists
}