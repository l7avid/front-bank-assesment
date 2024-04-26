import {
  Component,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() filteredProducts!: Product[];
  @Input() products!: Product[];
  @Input() selectedQuantity!: number;

  displayedProducts: Product[] = [];

  constructor(private router: Router) {}

  onQuantitySelected(quantity: number): void {
    this.selectedQuantity = quantity;
  }

  navigateToForm(): void {
    this.router.navigate(['/form']);
  }
}
