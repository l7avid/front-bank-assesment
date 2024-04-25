import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  @Input() filteredProducts?: Product[];
  @Input() products!: Product[];
  @Input() selectedQuantity!: number;
  displayedProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedQuantity']) {
      this.updateProductList()
    }
  }

  get productList(): Product[] {
    return this.filteredProducts && this.filteredProducts.length > 0
      ? this.filteredProducts
      : this.products;
  }

  onQuantitySelected(quantity: number): void {
    this.displayedProducts = this.productList.slice(0, quantity)
  }

  private updateProductList(): void {
    this.displayedProducts = this.selectedQuantity > 0
    ? this.products.slice(0, this.selectedQuantity)
    : [];
}
}
