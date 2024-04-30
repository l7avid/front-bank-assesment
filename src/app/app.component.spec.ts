import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ProductService } from './services/product-service/product.service';
import { Product } from './models/product';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    // Create a spy object for the ProductService
    productServiceSpy = jasmine.createSpyObj('ProductService', ['getProducts$', 'getFilteredProducts$']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ProductService, useValue: productServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize products and filteredProducts on ngOnInit', () => {
    const mockProducts: Product[] = [];
    const mockFilteredProducts: Product[] = [];
  
    // Stub the products$ and filteredProducts$ observables directly
    productServiceSpy.products$ = of(mockProducts);
    productServiceSpy.productsFiltered$ = of(mockFilteredProducts);
  
    // Trigger ngOnInit
    component.ngOnInit();
  
    // Check that products and filteredProducts are initialized correctly (empty arrays)
    expect(component.products).toEqual(mockProducts);
    expect(component.filteredProducts).toEqual(mockFilteredProducts);
  });
  

  it('should update selectedQuantity on onQuantitySelected', () => {
    const quantity = 10;
    component.onQuantitySelected(quantity);
    expect(component.selectedQuantity).toEqual(quantity);
  });
});
