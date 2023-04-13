import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'failed_jobs' })
export class FailedJob {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 191 })
  uuid: string;

  @Column({ type: 'text' })
  connection: string;

  @Column({ type: 'text' })
  queue: string;

  @Column({ type: 'longtext' })
  payload: string;

  @Column({ type: 'longtext' })
  exception: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  failed_at: Date;
}
