import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { Flower } from './entities/flower.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flower])],
  controllers: [FlowersController],
  providers: [FlowersService],
})
export class FlowersModule {}
