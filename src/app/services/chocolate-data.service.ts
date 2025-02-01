import { Injectable } from '@angular/core';
import { chocolate } from '../interfaces/chocolate';

@Injectable({
  providedIn: 'root',
})
export class ChocolateDataService {
  private selectedChocolate: chocolate = {} as chocolate;

  setChocoloate(chocolate: chocolate) {
    this.selectedChocolate = chocolate;
  }

  getChocolate() {
    return this.selectedChocolate;
  }
}
