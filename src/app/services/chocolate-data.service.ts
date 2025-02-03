import { Injectable } from '@angular/core';
import { products } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class productsDataService {
  private selectedproducts: products = {} as products;

  setChocoloate(products: products) {
    this.selectedproducts = products;
  }

  getproducts() {
    return this.selectedproducts;
  }
}
