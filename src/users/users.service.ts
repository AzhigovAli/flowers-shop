import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAllUsers() {
    return this.usersRepository.find();
  }

  findUserById(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  deleteUser(id: number) {
    return this.usersRepository.delete(id);
  }
}
