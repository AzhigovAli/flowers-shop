import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flower } from './entities/flower.entity';
import { FlowerDto } from './dto/flower.dto';

@Injectable()
export class FlowersService {
  constructor(
    @InjectRepository(Flower)
    private flowersRepository: Repository<Flower>,
  ) {}

  getFlowers() {
    return this.flowersRepository.find();
  }

  getFlowerById(id: number) {
    return this.flowersRepository.findOne({ where: { id } });
  }

  createFlower(flower: FlowerDto) {
    return this.flowersRepository.save(flower);
  }

  updateFlower(id: number, flower: Flower) {
    return this.flowersRepository.update(id, flower);
  }

  deleteFlower(id: number) {
    return this.flowersRepository.delete(id);
  }
}
