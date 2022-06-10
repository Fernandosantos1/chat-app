import { MessageDto, MessageRequestDto } from './dto/message.dto';

export class MessageMapper {
  messageRequestToResponseMap({
    text,
    send_at,
    uuid,
  }: MessageRequestDto): MessageDto {
    return new MessageDto(text, uuid, send_at);
  }
}
