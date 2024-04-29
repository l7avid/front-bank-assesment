import {
  Component,
  Input,
  OnInit
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
export class ProductListComponent implements OnInit{
  @Input() filteredProducts!: Product[];
  @Input() products!: Product[];
  @Input() selectedQuantity!: number;

  displayedProducts: Product[] = [];
  selectedOption: string = "";
  options: string[] = ['','Edit', 'Delete'];
  searchQuery: string = '';

  constructor(private router: Router, private productService: ProductService) {}
  
  ngOnInit(): void {
    this.getFilteredProducts();
    this.productService.editingCompleted$.subscribe(() => {
      this.getFilteredProducts();
    });
  }

  onQuantitySelected(quantity: number): void {
    this.selectedQuantity = quantity;
  }

  onSearchInputChange(searchQuery: string) {
    this.searchQuery = searchQuery;
    this.getFilteredProducts();
  }

  getFilteredProducts() {
    this.productService.filterProduct(this.searchQuery).subscribe(filteredProducts => {
      this.filteredProducts = filteredProducts;
    });
  }

  navigateToForm(): void {
    this.router.navigate(['/form']);
  }

  navigateToEdit(selectedOption: string, productId: string): void {
    this.productService.getProductById(productId).subscribe(product => {
      if(selectedOption.toLocaleLowerCase() === "edit" && product) {
        this.router.navigate(['/edit', product.id], {queryParams: product});
      }
      if(selectedOption.toLocaleLowerCase() === "delete") {
        this.router.navigate(['/delete', product?.id])
      }
    });
  }
}
