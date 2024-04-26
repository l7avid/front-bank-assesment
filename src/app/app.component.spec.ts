import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductService } from './services/product-service/product.service';
import { Product } from './models/product';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>

  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    // Create a spy object for the ProductService
    const productServiceSpy = jasmine.createSpyObj('ProductService', ['getProducts']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ProductService, useValue: productServiceSpy }]
    }).compileComponents();

    // Initialize the component and fixture
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize products on ngOnInit', () => {
    const mockProducts: Product[] = [
      { id: "1", logo: "awesome-logo1.png", name: 'Product 1', description: "Description 1", releaseDate: new Date(), restructureDate: new Date() 
      }, 
      { id: "2", logo: "awesome-logo2.png", name: 'Product 2', description: "Description 2", releaseDate: new Date(), restructureDate: new Date() 
      }];
    productService.getProducts.and.returnValue(mockProducts);

    fixture.detectChanges(); // Trigger ngOnInit

    expect(component.products).toEqual(mockProducts);
  });

  it('should update selectedQuantity on onQuantitySelected', () => {
    const quantity = 10;
    component.onQuantitySelected(quantity);
    expect(component.selectedQuantity).toEqual(quantity);
  });

})
