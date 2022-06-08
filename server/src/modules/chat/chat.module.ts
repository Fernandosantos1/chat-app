import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { PrismaService } from 'src/database/PrismaService';
import { ChatRepository } from './chat.repository';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [ChatController],
  providers: [ChatService, PrismaService, ChatRepository],
  imports: [UserModule],
})
export class ChatModule {}
