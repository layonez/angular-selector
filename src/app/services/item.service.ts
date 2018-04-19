import { ITEMS } from './../mock-data/items';
import { Item } from './../entities/item';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

/* service is ready to switch on http get istead of mock data object
  by using rx.js observable of method which returning promise like xhr.get*/
@Injectable()
export class ItemService {
  constructor() {}
  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }
  getItem(id: number): Observable<Item> {
    return of(ITEMS.find(item => item.id === id));
  }
}
