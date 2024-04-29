import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  private productsFilteredSubject = new BehaviorSubject<Product[]>(this.filteredProducts);
  products$ = this.productsSubject.asObservable();
  productsFiltered$ = this.productsFilteredSubject.asObservable();

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(productId: string) {
    return this.products.find(product => product.id === productId);
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsSubject.next([...this.products]);
  }

  updateProduct(incomingProduct: Product) {
    const index = this.products.findIndex(product => product.id === incomingProduct.id);
    if (index !== -1) {
      // Update the existing product with the new values
      this.products[index] = { ...this.products[index], ...incomingProduct };
    }
  }

  filterProduct(productName: string) {
    if(productName.trim() === '') {
      this.filteredProducts = [];
    } else {
      this.filteredProducts = this.products.filter(product => {
        return product.name.toLowerCase().includes(productName.toLowerCase());
      });
    }
    this.productsFilteredSubject.next([...this.filteredProducts])
  }

  isAnExistingId(id: string): boolean {
    return this.products.some(product => product.id === id);
  }

}
