import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { Flower } from './entities/flower.entity';
import { FlowerDto } from './dto/flower.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  getFlowers() {
    return this.flowersService.getFlowers();
  }

  @Get(':id')
  getFlowerById(@Param('id') id: number) {
    return this.flowersService.getFlowerById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a flower' })
  @ApiBody({ type: FlowerDto })
  createFlower(@Body() flower: FlowerDto) {
    return this.flowersService.createFlower(flower);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a flower' })
  @ApiBody({ type: FlowerDto })
  updateFlower(@Param('id') id: number, @Body() flower: Flower) {
    return this.flowersService.updateFlower(id, flower);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a flower' })
  deleteFlower(@Param('id') id: number) {
    return this.flowersService.deleteFlower(id);
  }
}
