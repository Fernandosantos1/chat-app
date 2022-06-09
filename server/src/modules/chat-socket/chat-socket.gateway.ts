import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { ChatSocketService } from './chat-socket.service';
import { CreateChatSocketDto } from './dto/create-chat-socket.dto';
import { UpdateChatSocketDto } from './dto/update-chat-socket.dto';

@WebSocketGateway(83, { transports: ['websockets'] })
export class ChatSocketGateway {
  constructor(private readonly chatSocketService: ChatSocketService) {}

  @SubscribeMessage('events')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() socket: Socket,
  ): string {
    socket.emit('events', { name: 'Nest' }, (data) => console.log(data));

    return data;
  }
}
