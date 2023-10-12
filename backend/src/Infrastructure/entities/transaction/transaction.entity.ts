import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column({ type: 'uuid' })
  destinationAccount: string;
  @Column({ type: 'uuid' })
  originAccount: string;
  @Column({ type: 'uuid' })
  userId: string;
  @Column({ type: 'varchar', length: 30 })
  type: string;
  @Column({ type: 'float' })
  amount: number;
  @Column({ type: 'varchar', length: 30 })
  description: string;
  @Column({ type: 'varchar', length: 30, default: 'active' })
  status: string;
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;
  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;
}
