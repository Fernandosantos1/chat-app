import { Injectable } from '@nestjs/common';
import { ChatRepository } from './chat.repository';
import { chatDto } from './dto/chat.dto';

@Injectable()
export class ChatService {
  constructor(private repository: ChatRepository) {}
  async create(data: chatDto, userSentUuid: string, userReceiveUuid: string) {
    return await this.repository.chatCreate(
      data,
      userSentUuid,
      userReceiveUuid,
    );
  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  // update(id: number, updateChatDto: UpdateChatDto) {
  //   return `This action updates a #${id} chat`;
  // }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
