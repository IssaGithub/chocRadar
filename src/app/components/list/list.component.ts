import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../interfaces/products';
import { RouterModule } from '@angular/router';
import { productsDataService } from '../../services/chocolate-data.service';
import { transformProductData } from '../../utility/product-helper';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/http/chocolate.service';
import { DecimalFormatPipe } from '../../pipes/decimal-format.pipe';

@Component({
  selector: 'choc-list',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, DecimalFormatPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  data: products[] = [];
  colums = ['name', 'brand', 'cheapestPricePer100g', 'pricePer100g', 'link'];

  $products = this.dataService.filteredProducts;
  constructor(private dataService: ProductService) {}

  selectItem(chocolate: products) {
    this.dataService.selectProduct(chocolate);
  }

  ngOnInit(): void {
    this.data = transformProductData(this.dataService.getchocolates());
  }
}
