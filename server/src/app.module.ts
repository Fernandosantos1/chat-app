import { Module } from '@nestjs/common';
import { PrismaService } from './database/PrismaService';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { UserRepository } from './modules/user/user.respository';
import { UserService } from './modules/user/user.service';
import { ChatModule } from './modules/chat/chat.module';
import { ChatRepository } from './modules/chat/chat.repository';
import { ChatService } from './modules/chat/chat.service';
import { ChatController } from './modules/chat/chat.controller';
import { ChatMapper } from './modules/chat/chat.mapper';
import { ChatSocketModule } from './modules/chat-socket/chat-socket.module';

@Module({
  imports: [UserModule, ChatModule, ChatSocketModule,],
  controllers: [UserController, ChatController],
  providers: [
    PrismaService,
    UserService,
    UserRepository,
    ChatRepository,
    ChatService,
    ChatMapper,
  ],
})
export class AppModule {}
