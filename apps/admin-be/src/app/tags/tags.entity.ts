import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class Tags {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', width: 255 })
    name: string
}