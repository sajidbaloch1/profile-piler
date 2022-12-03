import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('keywords')
export class KeywordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  keyword: string;

  @Column()
  source: string;

  @Column()
  category: string;

  @Column()
  results_count: number;

  @Column()
  scanned_at: Date;

  @Column()
  expiration: number;
}
