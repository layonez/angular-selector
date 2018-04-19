import { getTestBed } from '@angular/core/testing';
import { ModificationType } from './../../entities/modificationType';

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  IterableDiffers,
  DoCheck,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Item } from '../../entities/item';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-filterable-wrapper',
  templateUrl: './filterable-wrapper.component.html',
  styleUrls: ['./filterable-wrapper.component.css'],
})
export class FilterableWrapperComponent implements OnInit, DoCheck {
  differ: any;
  selectedItems: Item[] = [];

  filter: string = '';
  displayedItems: Item[] = [];
  private _items: Item[];

  @Output() itemDnD = new EventEmitter();

  @Input() dragulaBagName: string;

  @Input()
  set items(value) {
    this._items = value;
    this.selectedItems = [];
  }
  get items(): Item[] {
    return this._items;
  }

  constructor(
    private differs: IterableDiffers,
    private dragulaService: DragulaService,
    private ref: ElementRef
  ) {
    this.differ = differs.find([]).create(null);

    // bagName, el, target, source
    dragulaService.dropModel.subscribe(args => {
      let el = args[1];
      let source = args[3];
      if (el)
        this.itemDnD.emit({
          changedItem: el.dataset,
          type:
            source.parentNode.parentElement === ref.nativeElement
              ? ModificationType.Added
              : ModificationType.Removed,
        });
    });
  }

  ngOnInit() {}

  // select unselect logic
  onSelect(item: Item): void {
    this.selectedItems.includes(item)
      ? (this.selectedItems = this.selectedItems.filter(i => i.id !== item.id))
      : this.selectedItems.push(item);
  }

  // sync filtered model with view
  filterItems() {
    if (!this.filter) {
      this.displayedItems = this.items
        ? Array.from(this.items)
        : this.displayedItems;
    } else {
      this.displayedItems = this.items.filter(item => {
        return item.name.toLowerCase().includes(this.filter.toLowerCase());
      });

      this.selectedItems = this.selectedItems.filter(i =>
        this.displayedItems.some(di => di.id === i.id)
      );
    }

    this.selectedItems = [];
  }

  ngDoCheck(): void {
    const change = this.differ.diff(this.items);
    if (change) this.filterItems();
  }

  // adding id tracking for ui performance purposes
  trackByFn(index, item) {
    return item.id;
  }
}
