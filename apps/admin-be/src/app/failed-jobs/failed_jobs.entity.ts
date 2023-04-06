import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('failed_jobs')
export class FailedJobs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['uuid'])
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
  failed_at: Date;
}
