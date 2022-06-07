import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDto } from './dto/user.dto';
import { UserLoginDto } from './dto/user.login.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDto) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) return null;

    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(uuid: string) {
    return await this.prisma.user.findUnique({
      where: {
        uuid,
      },
    });
  }

  async update(uuid: string, data: UserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        uuid,
      },
    });

    if (!userExists) return;

    return await this.prisma.user.update({
      data,
      where: {
        uuid,
      },
    });
  }

  async remove(uuid: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        uuid,
      },
    });

    if (!userExists) return;

    return await this.prisma.user.delete({
      where: {
        uuid,
      },
    });
  }

  async login({ email, password }: UserLoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    return user;
  }
}
