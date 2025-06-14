import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class Auth {
  @ApiProperty({
    description: 'The unique identifier',
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
    description: 'The hashed password of the user',
    example: 'hashedPassword123',
  })
  @Column()
  password: string;
}
