import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { generateProduct } from 'src/app/utils/product-generator';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    generateProduct("100", "../../../assets/images/bank-card.png", "Tarjeta de crédito", "Primer año libre de cuota de manejo"),
    generateProduct("101", "../../../assets/images/pyme.png", "Servicios para Pymes", "Servicios que apoyan el crecimiento de tu Pyme"),
    generateProduct("102", "../../../assets/images/credit.png", "Créditos", "Permite invertir en tu negocio para sacarle todo su potencial"),
    generateProduct("103", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("104", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("105", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("106", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("107", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("108", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("109", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("110", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("111", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("112", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("113", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("114", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones")
  ]

  filteredProducts: Product[] = []

  private editingCompletedSubject = new Subject<void>();
  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  private productsFilteredSubject = new BehaviorSubject<Product[]>(this.filteredProducts);

  editingCompleted$: Observable<void> = this.editingCompletedSubject.asObservable();
  products$ = this.productsSubject.asObservable();
  productsFiltered$ = this.productsFilteredSubject.asObservable();

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  emitEditingCompleted(): void {
    this.editingCompletedSubject.next();
  }
  
  getProductById(productId: string): Observable<Product | undefined> {
    return this.products$.pipe(
      map(products => products.find(product => product.id === productId))
    );
  }

  addProduct(product: Product): void {
    this.products.push(product);
    this.productsSubject.next([...this.products]);
  }

  deleteProduct(productId: string): void {
    const index = this.products.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  updateProduct(incomingProduct: Product): void {
    const index = this.products.findIndex(product => product.id === incomingProduct.id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...incomingProduct };
      this.productsSubject.next([...this.products]);
    }
  }

  filterProduct(productName: string): Observable<Product[]> {
    if (productName.trim() === '') {
      return of([]);
    } else {
      const filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(productName.toLowerCase())
      );
      return of(filteredProducts);
    }
  }

  isAnExistingId(id: string): Observable<boolean> {
    return this.products$.pipe(
      map(products => products.some(product => product.id === id))
    );
  }

}
