import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

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

  constructor(private router: Router) {}

  get productList(): Product[] {
    return this.filteredProducts && this.filteredProducts.length > 0
      ? this.filteredProducts.slice(0, this.selectedQuantity)
      : this.products.slice(0, this.selectedQuantity);
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
}
