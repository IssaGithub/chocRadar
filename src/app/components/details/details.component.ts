import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { cheapestPrice } from '../../utility/product-helper';
import { ProductService } from '../../services/http/chocolate.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'choc-details',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  brand = this.dataService.selectedProduct().brand;
  name = this.dataService.selectedProduct().name;
  prices = this.dataService.selectedProduct().prices;

  productId?: string | null;
  displayedColumns: string[] = ['price', 'cheapest', 'amount', 'link'];
  faEdit = faEdit;
  editMode = false;

  titleGroup = new FormGroup({
    brand: new FormControl(this.brand),
    name: new FormControl(this.name),
  });
  cheapestPrice = cheapestPrice(this.prices);
  constructor(private dataService: ProductService) {}

  editTitle() {
    this.editMode = true;
  }
  submitForm() {
    this.editMode = !this.editMode;
  }

  ngOnInit() {
    this.titleGroup.get('brand')!.valueChanges.subscribe((value) => {
      if (value) this.brand = value;
    });

    this.titleGroup.get('name')!.valueChanges.subscribe((value) => {
      if (value) this.name = value;
    });
  }
}
