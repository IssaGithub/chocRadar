import { TestBed } from '@angular/core/testing';
import { productsDataService } from './product-data.service';


describe('ChocolateDataService', () => {
  let service: productsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
