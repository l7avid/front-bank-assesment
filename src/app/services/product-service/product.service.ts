import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { generateProduct } from 'src/app/utils/product-generator';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    generateProduct(1, "../../../assets/images/bank-card.png", "Tarjeta de crédito", "Primer año libre de cuota de manejo"),
    generateProduct(2, "../../../assets/images/credit.png", "Créditos", "Permite invertir en tu negocio para sacarle todo su potencial"),
    generateProduct(3, "../../../assets/images/pyme.png", "Servicios para Pymes", "Servicios que apoyan el crecimiento de tu Pyme"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones"),
    generateProduct(4, "../../../assets/images/life-insurance.png", "Seguros", "Agiliza la gestión de tu dinero y el de tu negocio con los diferentes servicios para tus transacciones")
  ]

  getProducts(): Product[] {
    return this.products;
  }

}
