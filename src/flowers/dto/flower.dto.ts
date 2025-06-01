import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class FlowerDto {
  @ApiProperty({
    description: 'The name of the flower',
    example: 'Rose',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'The description of the flower',
    example: 'A beautiful flower',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The price of the flower',
    example: 100,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'The image of the flower',
    example: 'https://via.placeholder.com/150',
  })
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;
}
