import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ChatService } from './chat.service';
import { chatDto } from './dto/chat.dto';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post(':userSentUuid/:userReceiveUuid')
  async create(
    @Res() res: Response,
    @Body() data: chatDto,
    @Param('userSentUuid') userSentUuid: string,
    @Param('userReceiveUuid') userReceiveUuid: string,
  ) {
    let chat = await this.chatService.create(
      data,
      userSentUuid,
      userReceiveUuid,
    );
    return chat ? res.status(201).json(chat) : res.status(403).send();
  }

  @Get()
  findAll() {
    return this.chatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
  //   return this.chatService.update(+id, updateChatDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
}
