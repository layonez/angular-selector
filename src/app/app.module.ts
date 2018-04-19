import { MessageService } from './services/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { FilterableWrapperComponent } from './components/filterable-wrapper/filterable-wrapper.component';
import { ItemService } from './services/item.service';
import { MessagesListComponent } from './components/messages-list/messages-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    FilterableWrapperComponent,
    MessagesListComponent,
  ],
  imports: [BrowserModule, FormsModule, DragulaModule],
  providers: [ItemService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
