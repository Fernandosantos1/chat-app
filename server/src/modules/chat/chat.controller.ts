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
import { chatCreateDto, chatDto, chatFindDto } from './dto/chat.dto';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Res() res: Response, @Body() data: chatCreateDto) {
    let chat = await this.chatService.create(data);
    return chat ? res.status(201).json(chat) : res.status(403).send();
  }

  @Get()
  async findOne(@Body() data: chatFindDto) {
    return await this.chatService.findOne(data);
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
