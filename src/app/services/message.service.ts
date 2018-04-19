import { Message } from './../entities/message';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: Message[] = [];

  add(message: Message) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
