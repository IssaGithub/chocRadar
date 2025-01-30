import { prices } from "./prices";

export interface chocolate{
    id:string;
    name:string;
    brand:string;
    currency:string;
    prices:prices[];
}