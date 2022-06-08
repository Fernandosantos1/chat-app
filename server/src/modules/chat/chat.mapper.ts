import { chatDto, chatCreateDto } from './dto/chat.dto';

export class ChatMapper {
  chatMap({ text, uuid, send_at }: chatCreateDto): chatDto {
    return new chatDto(uuid, text, send_at);
  }
}
