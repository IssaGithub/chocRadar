import { computed, Injectable, signal } from '@angular/core';

import * as chocolateData from '../../data/chocolate-data.json';
import { products } from '../../interfaces/products';
import { transformProductData } from '../../utility/product-helper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private data = transformProductData(chocolateData.data);

  private products = signal<products[]>([]);
  private searchQuery = signal<string>('');
  selectedProduct = signal<products>({} as products);

  filteredProducts = computed(() =>
    this.products().filter((product) =>
      product.brand
        .toLocaleLowerCase()
        .includes(this.searchQuery().toLocaleLowerCase()),
    ),
  );

  getchocolates(): products[] {
    return this.data;
  }

  constructor() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.products.set(this.data);
  }

  selectProduct(product:products){
    this.selectedProduct.set(product)
  }

  search(query: string) {
    this.searchQuery.set(query);
  }
}
