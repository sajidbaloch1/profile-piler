import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity('jobs')
export class Jobs {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 191, default: false })
    queue: string;

    @Column({ type: 'longtext', })
    payload: string;

    @Column({ type: 'tinyint', unsigned: true })
    attempts: boolean;

    @Column({ type: 'int', width: 10, unsigned: true, nullable: true })
    reserved_at: number;

    @Column({ type: 'int', width: 10, unsigned: true })
    available_at: number;

    @Column({ type: 'int', width: 10, unsigned: true })
    created_at: number
}