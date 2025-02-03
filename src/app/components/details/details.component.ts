import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockChock } from '../../data/mock';
import { MatTableModule } from '@angular/material/table';
import { prices } from '../../interfaces/prices';
import { CommonModule } from '@angular/common';
import { cheapestPrice } from '../../utility/product-helper';
import { products } from '../../interfaces/products';
@Component({
  selector: 'choc-details',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  // product: chocolate = this.chocolateDataService.getChocolate();
  product: products[] = [mockChock];
  prices: prices[] = this.product[0].prices;
  productId?: string | null;
  displayedColumns: string[] = ['price', 'cheapest', 'amount', 'link'];

  cheapestPrice = cheapestPrice(this.prices);
  constructor(private route: ActivatedRoute) {}

  ngOnnit() {
    this.route.queryParamMap.subscribe((paramMap) => {
      this.productId = paramMap.get('id');
    });
  }
}
