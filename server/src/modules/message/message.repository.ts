import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserRepository } from '../user/user.respository';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageRepository {
  constructor(
    private prisma: PrismaService,
    private userRepository: UserRepository,
  ) {}

  async messageCreate(
    data: MessageDto,
    userSentUuid: string,
    userReceiveUuid: string,
  ) {
    if (
      !(await this.userRepository.userExistsByUuid(userReceiveUuid)) ||
      !(await this.userRepository.userExistsByUuid(userSentUuid))
    )
      return null;

    let chat = await this.prisma.chat.create({
      data,
    });

    await this.prisma.userOnChat.create({
      data: {
        is_who_sent: true,
        fk_user: userSentUuid,
        fk_chat: chat.uuid,
      },
    });

    await this.prisma.userOnChat.create({
      data: {
        is_who_sent: false,
        fk_user: userReceiveUuid,
        fk_chat: chat.uuid,
      },
    });

    return await this.prisma.chat.findUnique({
      where: {
        uuid: chat.uuid,
      },
      select: {
        text: true,
        send_at: true,
        users: {
          select: {
            is_who_sent: true,
            user: {
              select: {
                name: true,
                uuid: true,
              },
            },
          },
        },
      },
    });
  }
}
