import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column({ type: 'varchar', length: 150 })
  name: string;
  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;
  @Column({ type: 'varchar', length: 30 })
  phone: string;
  @Column({ type: 'varchar', length: 150 })
  password: string;
  @Column({ type: 'varchar', length: 20, default: 'user' })
  role: string;
  @Column({ type: 'varchar', length: 30, default: 'active' })
  status: string;
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;
  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;
}
