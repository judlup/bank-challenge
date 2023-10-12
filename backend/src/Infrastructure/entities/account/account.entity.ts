import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column({ type: 'varchar', length: 150, default: 'My account' })
  name: string;
  @Column({ type: 'uuid', unique: true })
  userId: string;
  @Column({ type: 'varchar', length: 150, unique: true })
  accountNumber: string;
  @Column({ type: 'float', default: 0 })
  balance: number;
  @Column({ type: 'varchar', length: 30, default: 'active' })
  status: string;
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;
  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;
}
