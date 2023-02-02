import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tags {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', width: 255 })
    name: string
}