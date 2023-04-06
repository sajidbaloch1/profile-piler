import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('curated_lists')
export class CuratedLists {
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
}