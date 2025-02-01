import { Component } from '@angular/core';
import { chocolate } from '../../interfaces/chocolate';
import { ActivatedRoute } from '@angular/router';
import { ChocolateDataService } from '../../services/chocolate-data.service';
import { mockChock } from '../../data/mock';
import { MatTableModule } from '@angular/material/table';
import { prices } from '../../interfaces/prices';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'choc-details',
  standalone: true,
  imports: [MatTableModule,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  // product: chocolate = this.chocolateDataService.getChocolate();
  product: chocolate[] = [mockChock];
  prices: prices[] = this.product[0].prices;
  productId?: string | null;
  displayedColumns: string[] = ['price','cheapest', 'amount', 'link'];

  constructor(
    private route: ActivatedRoute,
    private chocolateDataService: ChocolateDataService,
  ) {}

  ngOnnit() {
    this.route.queryParamMap.subscribe((paramMap) => {
      this.productId = paramMap.get('id');
    });
  }
}
