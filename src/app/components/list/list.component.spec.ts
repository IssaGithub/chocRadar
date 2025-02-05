import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { mockChock } from '../../data/mock';
import { provideRouter, Router } from '@angular/router';
import { productsDataService } from '../../services/product-data.service';
import { ProductService } from '../../services/http/chocolate.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let productService: ProductService;
  let product = mockChock;
  let productServiceSpy: jasmine.Spy
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.inject(ProductService)
    productServiceSpy = spyOn(productService, 'selectProduct')
  });

  it('make sure selectProduct is called', () => {
    component.selectItem(product)
    expect(productServiceSpy).toHaveBeenCalled();
  });
});
