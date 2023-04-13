import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('elastic_search_logs')
export class ElasticSearchLog {
  @Column({ type: 'varchar', length: 2000, nullable: false, collation: 'utf8mb4_unicode_ci' })
  query: string;

  @Column({ type: 'int', nullable: false })
  query_time_ms: number;

  @Column({ type: 'tinyint', nullable: false })
  timed_out: boolean;

  @Column({ type: 'smallint', nullable: false })
  failed_shareds_count: number;

  @Column({ type: 'smallint', nullable: false })
  skipped_shared_count: number;

  @Column({ type: 'bigint', nullable: false })
  total_hits: number;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
