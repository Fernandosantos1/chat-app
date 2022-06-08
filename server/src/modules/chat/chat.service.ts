import { Injectable } from '@nestjs/common';
import { ChatMapper } from './chat.mapper';
import { ChatRepository } from './chat.repository';
import { chatCreateDto, chatDto } from './dto/chat.dto';

@Injectable()
export class ChatService {
  constructor(
    private repository: ChatRepository,
    private chatMapper: ChatMapper,
  ) {}
  async create(data: chatCreateDto) {
    let newChat = this.chatMapper.chatMap(data);

    return await this.repository.chatCreate(
      newChat,
      data.userSentUuid,
      data.userReceiveUuid,
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
