import { Injectable } from '@nestjs/common';
import { MessageMapper } from './message.mapper';
import { MessageRepository } from './message.repository';
import { MessageRequestDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  constructor(
    private messageMapper: MessageMapper,
    private repository: MessageRepository,
  ) {}

  async handleMessage(message: MessageRequestDto) {
    const data = this.messageMapper.messageRequestToResponseMap(message);
    return this.repository.messageCreate(
      data,
      message.userSentUuid,
      message.userReceiveUuid,
    );
  }
}
