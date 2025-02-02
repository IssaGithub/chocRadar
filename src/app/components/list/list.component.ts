import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chocolate } from '../../interfaces/chocolate';
import { RouterModule } from '@angular/router';
import { ChocolateDataService } from '../../services/chocolate-data.service';
import { transformProductData } from '../../utility/chocolate-helper';
import { ChocolateService } from '../../services/http/chocolate.service';

@Component({
  selector: 'choc-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  data: chocolate[] = [];
  colums = ['name', 'brand', 'cheapestPricePer100g', 'pricePer100g', 'link'];
  constructor(
    private chocolateService: ChocolateDataService,
    private dataService: ChocolateService,
  ) {}

  selectItem(chocolate: chocolate) {
    this.chocolateService.setChocoloate(chocolate);
  }

  ngOnInit(): void {
    this.data = transformProductData(this.dataService.getchocolates());
  }
}
