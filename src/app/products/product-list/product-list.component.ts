import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges, OnInit, OnDestroy {
  @Input() filteredProducts?: Product[];
  @Input() products!: Product[];
  @Input() selectedQuantity!: number;

  displayedProducts: Product[] = [];
  private productListSubscription!: Subscription;

  constructor(private router: Router, private productService: ProductService) {}

  get productList(): Product[] {
    return this.filteredProducts && this.filteredProducts.length > 0
      ? this.filteredProducts.slice(0, this.selectedQuantity)
      : this.products.slice(0, this.selectedQuantity);
  }

  ngOnInit() {
    // Subscribe to changes in the product list
    this.productListSubscription = this.productService.productList$.subscribe(products => {
      this.products = products;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedQuantity'] || changes['filteredProducts']) {
      this.updateProductList();
    }
  }

  onQuantitySelected(quantity: number): void {
    this.selectedQuantity = quantity;
  }

  private updateProductList(): void {
    this.filteredProducts?.length
      ? (this.displayedProducts = this.filteredProducts.slice(
          0,
          this.selectedQuantity
        ))
      : (this.displayedProducts = this.products.slice(
          0,
          this.selectedQuantity
        ));
  }

  navigateToForm(): void {
    this.router.navigate(['/form']);
  }

  onSearch(value: string): void {
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(value.toLocaleLowerCase())
    );
  }

  ngOnDestroy() {
    this.productListSubscription.unsubscribe();
  }
}
