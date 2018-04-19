import { ModificationType } from './modificationType';
import { Item } from './item';

export interface Message {
  changedItems: Item[];
  type: ModificationType;
}
