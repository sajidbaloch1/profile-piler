import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('keywords')
export class Keywords {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', width: 100 })
    keyword: string;

    @Column({ type: 'varchar', width: 50 })
    source: string;

    @Column({ type: 'varchar', width: 100 })
    category: string;


    @Column({ type: 'int', width: 10 })
    resultsCount: number

    @Column({ type: 'timestamp', nullable: true })
    scannedAt: Date


}