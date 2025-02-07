import { computed, Injectable, signal } from '@angular/core';

import { products } from '../../interfaces/products';
import { transformProductData } from '../../utility/product-helper';
import { chocolateData } from '../../data/chocolate-data';

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

  selectProduct(product: products) {
    this.selectedProduct.set(product);
  }

  search(query: string) {
    this.searchQuery.set(query);
  }

  updateProduct(identifier: Partial<products>, updates: Partial<products>) {
    this.products.update((currentProducts) =>
      currentProducts.map((product) =>
        this.matchesIdentifier(product, identifier)
          ? { ...product, ...updates }
          : product
      )
    );
  }

  private matchesIdentifier(product: products, identifier: Partial<products>): boolean {
    return Object.entries(identifier).every(([key, value]) => (product as any)[key] === value);
  }
}
