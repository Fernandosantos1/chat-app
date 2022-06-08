import { Module } from '@nestjs/common';
import { PrismaService } from './database/PrismaService';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { UserRepository } from './modules/user/user.respository';
import { UserService } from './modules/user/user.service';
@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [PrismaService, UserService, UserRepository],
})
export class AppModule {}
