import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from './models/product';
import { generateProduct } from './utils/product-generator';
import { ProductService } from './services/product-service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'tech-challenge';
  products: Product[] = [];
  selectedQuantity: number = 10;

  constructor(private productService: ProductService) {}

  @Output() searchChange = new EventEmitter<string>();
  
  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onSearch(value: string): void {
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(value.toLocaleLowerCase())
    );
  }

  onQuantitySelected(quantity: number): void {
    this.selectedQuantity = quantity;
  }
  
}
