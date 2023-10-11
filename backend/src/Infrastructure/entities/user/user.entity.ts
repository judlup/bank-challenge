import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;
  @Column({ type: 'varchar', length: 150 })
  email: string;
  @Column({ type: 'varchar', length: 30 })
  phone: string;
  @Column({ type: 'varchar', length: 150 })
  password: string;
  @Column({ type: 'uuid' })
  roleId: string;
  @Column({ type: 'varchar', length: 30 })
  status: string;
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;
  @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;
}
