import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserRepository } from '../user/user.respository';
import { MessageGateway } from './message.gateway';
import { MessageMapper } from './message.mapper';
import { MessageRepository } from './message.repository';
import { MessageService } from './message.service';

@Module({
  providers: [
    MessageGateway,
    MessageService,
    MessageRepository,
    MessageMapper,
    PrismaService,
    UserRepository,
  ],
})
export class MessageModule {}
