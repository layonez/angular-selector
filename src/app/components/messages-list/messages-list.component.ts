import { Message } from './../../entities/message';
import { ModificationType } from './../../entities/modificationType';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
})
export class MessagesListComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {}

  getMessageText(message: Message): string {
    let itemsText = message.changedItems.reduce((total, mes, index) => {
      let text = `${total} ${mes.id}:${mes.name}`;
      return text + (message.changedItems.length === index + 1 ? '' : ', ');
    }, '');
    let text =
      message.type === ModificationType.Added
        ? `+ ${itemsText}`
        : `- ${itemsText}`;

    return text;
  }
}
