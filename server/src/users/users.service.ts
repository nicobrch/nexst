import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashStr } from 'src/utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  findByEMail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async create(data: User): Promise<User> {
    const password = data.password;
    const hashedPassword = await hashStr(password);
    data.password = hashedPassword;
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(user);
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
