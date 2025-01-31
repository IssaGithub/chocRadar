import { BaseItem } from './BaseItem';
import { prices } from './prices';

export interface chocolate extends BaseItem {
  brand: string;
  currency: string;
  prices: prices[];
  link?: string;
  pricePer100g?: number;
  cheapestPricePer100g?: number;
}
