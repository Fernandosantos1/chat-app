import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDto } from './dto/user.dto';
import { UserLoginDto } from './dto/user.login.dto';
import { UserRepository } from './user.respository';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async create(data: UserDto) {
    return (await this.repository.userExistsByEmail(data.email))
      ? await this.repository.userCreate(data)
      : null;
  }

  async findAll() {
    return this.repository.findAllUsers();
  }

  async findOne(uuid: string) {
    return await this.repository.findOneUser(uuid);
  }

  async update(uuid: string, data: UserDto) {
    return (await this.repository.userExistsByUuid(uuid))
      ? await this.repository.updateUser(data, uuid)
      : null;
  }

  async remove(uuid: string) {
    return (await this.repository.userExistsByUuid(uuid))
      ? await this.repository.removeByUuid(uuid)
      : null;
  }

  async login({ email, password }: UserLoginDto) {
    return await this.repository.loginUser(email, password);
  }
}
