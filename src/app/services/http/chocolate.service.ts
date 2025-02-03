import { computed, Injectable, signal } from '@angular/core';

import * as chocolateData from '../../data/chocolate-data.json';
import { products } from '../../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { transformProductData } from '../../utility/product-helper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private data = transformProductData(chocolateData.data);

  private products = signal<products[]>([]);
  private searchQuery = signal<string>('');

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

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts() {
    console.log('fetch', this.data);
    this.products.set(this.data);
  }

  search(query: string) {
    console.log('query', query);
    this.searchQuery.set(query);
  }
}
