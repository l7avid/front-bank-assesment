import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product-service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'tech-challenge';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedQuantity: number = 5;

  constructor(private productService: ProductService) {}
  

  ngOnInit(): void {
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
    this.productService.productsFiltered$.subscribe(filteredProducts => {
      this.filteredProducts = filteredProducts;
    })
  }

  onQuantitySelected(quantity: number): void {
    this.selectedQuantity = quantity;
  }
  
}
