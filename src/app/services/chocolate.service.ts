import { Injectable } from '@angular/core';

import * as chocolateData from '../data/chocolate-data.json';
import { chocolate } from '../interfaces/chocolate';

@Injectable({
  providedIn: 'root',
})
export class ChocolateService {
  private data = chocolateData.data;

  constructor() {}

  getchocolates(): chocolate[] {
    return this.data;
  }
}
