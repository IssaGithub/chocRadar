import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { mockChock } from '../../data/mock';
import { ProductService } from '../../services/http/chocolate.service';
import { products } from '../../interfaces/products';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let product = mockChock;
  let fixture: ComponentFixture<DetailsComponent>;
  let mockProductService: jasmine.SpyObj<ProductService>;
  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj(['selectedProduct'])
    mockProductService.selectedProduct.and.returnValue(product)
    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
      providers: [{ provide: ProductService, useValue: mockProductService }]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });

})
