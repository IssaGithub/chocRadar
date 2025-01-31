import { prices } from "./prices";

export interface BaseItem {
    id:string;
    name:string;
    brand:string;
    currency:string;
    prices:prices[];
  }