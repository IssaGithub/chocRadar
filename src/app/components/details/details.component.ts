import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { cheapestPrice } from '../../utility/product-helper';
import { ProductService } from '../../services/http/chocolate.service';
@Component({
  selector: 'choc-details',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  brand = this.dataService.selectedProduct().brand;
  name = this.dataService.selectedProduct().name;
 prices= this.dataService.selectedProduct().prices;
 
  productId?: string | null;
  displayedColumns: string[] = ['price', 'cheapest', 'amount', 'link'];

  cheapestPrice = cheapestPrice(this.prices);
  constructor(private route: ActivatedRoute,private dataService:ProductService) {}

  ngOnnit() {
    this.route.queryParamMap.subscribe((paramMap) => {
      this.productId = paramMap.get('id');
    });
  }
}
