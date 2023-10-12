import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column({ type: 'json' })
  data: object;
  @Column({ type: 'varchar', length: 150 })
  type: string;
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;
  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;
}
