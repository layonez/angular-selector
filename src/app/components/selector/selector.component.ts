import { ModificationType } from './../../entities/modificationType';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../entities/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent implements OnInit {
  /*  its not a best practice to impliment parent listening for child event by passing callback 
  more cleaner solution to use an EventEmitter property with which it emits events when something happens
  
   https://angular.io/guide/component-interaction#parent-listens-for-child-event */
  @Output() onSelectionChanged: EventEmitter<any> = new EventEmitter();

  items: Item[];
  selectedItems: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => (this.items = items));
  }

  onItemChanged($event) {
    this.onSelectionChanged.emit({
      changedItems: [$event.changedItem],
      type: $event.type,
    });
  }

  selectionWasChanged(changedItems: Item[], type: ModificationType): void {
    this.onSelectionChanged.emit({ changedItems, type });
  }

  addToSelection(items: Item[]): void {
    this.items = this.items.filter(item => {
      return !items.some(i => i.id === item.id);
    });
    this.selectedItems.push(...items);

    this.selectionWasChanged(items, ModificationType.Added);
  }

  removeFromSelection(items: Item[]): void {
    this.items.push(...items);
    this.selectedItems = this.selectedItems.filter(item => {
      return !items.some(i => i.id === item.id);
    });

    this.selectionWasChanged(items, ModificationType.Removed);
  }
}
