import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FailedJobs {

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column('text')
    connection: string;

    @Column('text')
    queue: string;

    @Column('longtext')
    payload: string;

    @Column('longtext')
    exception: string;

    @Column({ type: 'timestamp'})
    failed_at: Date
}