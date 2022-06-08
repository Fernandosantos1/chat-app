import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async userCreate(data: UserDto) {
    return await this.prisma.user.create({
      data,
    });
  }

  async userExistsByEmail(email: string) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    return userExists == null ? true : false;
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async findOneUser(uuid: string) {
    return await this.prisma.user.findUnique({
      where: {
        uuid,
      },
    });
  }

  async userExistsByUuid(uuid: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        uuid,
      },
    });
    return userExists ? true : false;
  }

  async updateUser(data: UserDto, uuid: string) {
    return await this.prisma.user.update({
      data,
      where: {
        uuid,
      },
    });
  }
  async removeByUuid(uuid: string) {
    return await this.prisma.user.delete({
      where: {
        uuid,
      },
    });
  }

  async loginUser(email: string, password: string) {
    return await this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
  }
}
