import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { PrismaService } from 'src/database/PrismaService';
import { ChatRepository } from './chat.repository';
import { UserModule } from '../user/user.module';
import { ChatMapper } from './chat.mapper';

@Module({
  controllers: [ChatController],
  providers: [ChatService, PrismaService, ChatRepository, ChatMapper],
  imports: [UserModule],
})
export class ChatModule {}
