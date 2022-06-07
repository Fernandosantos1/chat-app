import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserLoginDto } from './dto/user.login.dto';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Res() res: Response, @Body() userData: UserLoginDto) {
    let user = await this.userService.login(userData);

    return user ? res.status(200).json(user) : res.status(401).send();
  }
  @Post()
  async create(@Res() res: Response, @Body() createUserDto: UserDto) {
    let user = await this.userService.create(createUserDto);
    return user ? res.status(201).json(user) : res.status(403).send();
  }

  @Get()
  async findAll(@Res() res: Response) {
    let users = await this.userService.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  }

  @Get(':uuid')
  async findOne(@Res() res: Response, @Param('uuid') uuid: string) {
    let user = await this.userService.findOne(uuid);
    return user ? res.status(200).json(user) : res.status(404).send();
  }

  @Put(':uuid')
  async update(
    @Res() res: Response,
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UserDto,
  ) {
    let user = await this.userService.update(uuid, updateUserDto);
    return user ? res.status(200).json(user) : res.status(404).send();
  }

  @Delete(':uuid')
  async remove(@Res() res: Response, @Param('uuid') uuid: string) {
    let user = await this.userService.remove(uuid);
    return user ? res.status(200).json(user) : res.status(404).send();
  }
}
