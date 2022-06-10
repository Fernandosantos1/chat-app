export class MessageRequestDto {
  uuid?: string;
  text: string;
  send_at?: string;
  userSentUuid: string;
  userReceiveUuid: string;
}
export class MessageDto {
  constructor(uuid: string, text: string, send_at: string) {
    this.uuid = uuid;
    this.text = text;
    this.send_at = send_at;
  }
  uuid?: string;
  text: string;
  send_at?: string;
}
