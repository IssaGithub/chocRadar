import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chocolate } from '../../interfaces/chocolate';
import { RouterModule } from '@angular/router';
import { ChocolateDataService } from '../../services/chocolate-data.service';

@Component({
  selector: 'choc-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() data: chocolate[] = [];

  constructor(private chocolateService: ChocolateDataService) {}

  selectItem(chocolate: chocolate) {
    console.log('selected choc', chocolate);
    this.chocolateService.setChocoloate(chocolate);
  }
}
