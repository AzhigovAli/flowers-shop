import { ApiProperty } from '@nestjs/swagger';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Column } from 'typeorm';

@Entity('users')
export class User {
  @ApiProperty({
    description: 'The ID of the user',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  @Column()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password',
  })
  @Column()
  password: string;

  @Column({ type: 'jsonb', nullable: true })
  @ApiProperty({
    description: 'The cart of the user',
    example: [{ quantity: 1 }],
  })
  cart: {
    flowerId: number;
    quantity: number;
  }[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
