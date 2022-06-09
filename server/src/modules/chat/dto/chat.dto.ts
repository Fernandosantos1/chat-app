export class chatDto {
  constructor(uuid: string, text: string, send_at: string) {
    this.uuid = uuid;
    this.text = text;
    this.send_at = send_at;
  }
  uuid?: string;
  text: string;
  send_at?: string;
}

export class chatCreateDto {
  uuid?: string;
  text: string;
  send_at?: string;
  userSentUuid: string;
  userReceiveUuid: string;
}

export class chatFindDto {
  userSentUuid: string;
  userReceiveUuid: string;
}
