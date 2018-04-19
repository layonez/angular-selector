import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private messageService: MessageService) {}

  title = 'app';

  onSelectionChanged(event) {
    this.messageService.add(event);
  }
}
