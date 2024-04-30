import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';
import { of } from 'rxjs';
import { Product } from 'src/app/models/product';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    productServiceSpy = jasmine.createSpyObj('ProductService', ['filterProduct']);
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [{ provide: ProductService, useValue: productServiceSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchChange event when onSearch is called', fakeAsync(() => {
    const inputValue = 'test';
    const searchChangeSpy = spyOn(component.searchChange, 'emit');

    // Simulate input event with a value
    const inputElement = document.createElement('input');
    inputElement.value = inputValue;
    const event = new Event('input');
    spyOnProperty(event, 'target', 'get').and.returnValue(inputElement);

    // Mock filterProduct to return an observable
    const filteredProducts: Product[] = [];
    productServiceSpy.filterProduct.and.returnValue(of(filteredProducts));

    // Call onSearch method
    component.onSearch(event);

    // Simulate debounceTime
    tick(300);

    // Expect searchChange event to be emitted with the input value
    expect(searchChangeSpy).toHaveBeenCalledWith(inputValue);
  }));
});
