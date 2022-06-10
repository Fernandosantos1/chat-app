import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessageService } from './message.service';
import { MessageRequestDto } from './dto/message.dto';

@WebSocketGateway({
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true,
    transports: ['websocket', 'polling'],
  },
  allowEIO3: true,
})
export class MessageGateway {
  constructor(private service: MessageService) {}
  @WebSocketServer()
  server

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() message: MessageRequestDto) {
    const data = await this.service.handleMessage(message);
    this.server.emit('message', data);
  }
}
