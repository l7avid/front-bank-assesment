import {
  Component,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

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
  selectedOption: string = "";
  options: string[] = ['','Edit', 'Delete']

  constructor(private router: Router, private productService: ProductService) {}

  onQuantitySelected(quantity: number): void {
    this.selectedQuantity = quantity;
  }

  navigateToForm(): void {
    this.router.navigate(['/form']);
  }

  navigateToEdit(selectedOption: string, productId: string): void {
    const product = this.productService.getProductById(productId);
    if(selectedOption.toLocaleLowerCase() === "edit" && product) {
      this.router.navigate(['/edit'], {queryParams: product});
    }
    if(selectedOption.toLocaleLowerCase() === "delete") {
      this.router.navigate(['/delete'])
    }
  }
}
