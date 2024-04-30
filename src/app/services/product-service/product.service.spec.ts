import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of products', () => {
    const products = service.getProducts();
    expect(products).toBeTruthy();
  });

  it('should emit editing completed', () => {
    const emitEditingCompletedSpy = spyOn(
      service,
      'emitEditingCompleted'
    ).and.callThrough();
    service.emitEditingCompleted();
    expect(emitEditingCompletedSpy).toHaveBeenCalled();
  });

  it('should return a product by id', () => {
    const productId = '100';
    const product = service.getProductById(productId);
    expect(product).toBeTruthy();
  });
  
  it('should delete product', () => {
    const productId = '1';
    service.deleteProduct(productId);
    service.products$.subscribe((products) => {
      expect(products.some((product) => product.id === productId)).toBeFalsy();
    });
  });

  it('should update a product', (done) => {
    const updatedProduct = {
      id: '100',
      logo: '../../../assets/images/updated-product.png',
      name: 'Updated Product',
      description: 'Description for updated product',
      releaseDate: new Date(),
      restructureDate: new Date(),
    };
    service.updateProduct(updatedProduct);
    service.getProducts().subscribe((products) => {
      const product = products.find((p) => p.id === updatedProduct.id);
      expect(product).toEqual(updatedProduct);
      done();
    });
  });


  it('should filter products by name', () => {
    const productName = 'Pyme';
    service.filterProduct(productName).subscribe((filteredProducts) => {
      expect(filteredProducts.length).toBeGreaterThan(0);
      expect(
        filteredProducts.every((product) =>
          product.name.toLowerCase().includes(productName.toLowerCase())
        )
      ).toBeTruthy();
    });
  });

  it('should check if an id exists', () => {
    const existingId = '100';
    const nonExistingId = '999';
    expect(service.isAnExistingId(existingId)).toBeTruthy();
    expect(service.isAnExistingId(nonExistingId)).toBeFalsy();
  });
});
