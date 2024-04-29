import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchChange = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.productService.filterProduct(value).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(filteredProducts => {
        this.searchChange.emit(value);
        return filteredProducts;
      })
    ).subscribe();
  }

}
