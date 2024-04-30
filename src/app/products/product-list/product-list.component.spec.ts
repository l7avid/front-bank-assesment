import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductService } from 'src/app/services/product-service/product.service';
import { of } from 'rxjs';
import { Product } from 'src/app/models/product';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;
  let router: Router;

  beforeEach(async () => {
    const productServiceSpyObj = jasmine.createSpyObj('ProductService', [
      'filterProduct',
      'getProductById',
    ]);

    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ProductService, useValue: productServiceSpyObj }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productServiceSpy = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to form', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToForm();
    expect(navigateSpy).toHaveBeenCalledWith(['/form']);
  });

  it('should navigate to edit', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const mockProduct: Product = {
      id: '1',
      logo: 'logo1.png',
      name: 'Product 1',
      description: 'Description 1',
      releaseDate: new Date(),
      restructureDate: new Date(),
    };
    productServiceSpy.getProductById.and.returnValue(of(mockProduct));
    component.navigateToEdit('edit', '1');
    expect(navigateSpy).toHaveBeenCalledWith(['/edit', '1'], { queryParams: mockProduct });
  });

  it('should navigate to delete', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const mockProduct: Product = {
      id: '1',
      logo: 'logo1.png',
      name: 'Product 1',
      description: 'Description 1',
      releaseDate: new Date(),
      restructureDate: new Date(),
    };
    productServiceSpy.getProductById.and.returnValue(of(mockProduct));
    component.navigateToEdit('delete', '1');
    expect(navigateSpy).toHaveBeenCalledWith(['/delete', '1']);
  });

  // Add more test cases as needed for other methods
});
