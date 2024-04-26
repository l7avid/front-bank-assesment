import { Injectable } from '@angular/core';
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
    generateProduct("114", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("115", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("116", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("117", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("118", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("119", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("120", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct("121", "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones")
  ]

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  isAnExistingId(id: string): boolean {
    return this.products.some(product => product.id === id);
  }
}
