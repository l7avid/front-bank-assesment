import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ModalDeleteComponent } from './modal-delete.component';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Product } from 'src/app/models/product';

describe('ModalDeleteComponent', () => {
  let component: ModalDeleteComponent;
  let fixture: ComponentFixture<ModalDeleteComponent>;
  let productService: jasmine.SpyObj<ProductService>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    const productServiceSpy = jasmine.createSpyObj('ProductService', ['getProductById', 'deleteProduct']);
    await TestBed.configureTestingModule({
      declarations: [ModalDeleteComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ProductService, useValue: productServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (key: string) => '1' } } } }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ModalDeleteComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize product on ngOnInit', () => {
    const mockProduct: Product = { id: '1', logo: 'logo.png', name: 'Product', description: 'Description', releaseDate: new Date(), restructureDate: new Date() };
    productService.getProductById.and.returnValue(of(mockProduct));

    component.ngOnInit();

    expect(component.product).toEqual(mockProduct);
  });

  it('should delete product and navigate to home', () => {
    const navigateSpy = spyOn(router, 'navigate');
    productService.deleteProduct.and.returnValue();

    component.deleteProduct();

    expect(productService.deleteProduct).toHaveBeenCalledWith('1');
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should close modal', () => {
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl');

    component.closeModal();

    expect(navigateByUrlSpy).toHaveBeenCalledWith('');
  });
});
