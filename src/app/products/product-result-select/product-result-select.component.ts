import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-result-select',
  templateUrl: './product-result-select.component.html',
  styleUrls: ['./product-result-select.component.css']
})
export class ProductResultSelectComponent {

  @Output() quantitySelected = new EventEmitter<number>();

  selectedQuantity: number = 5;
  
  onSelectChange(): void {
    this.quantitySelected.emit(this.selectedQuantity);
  }
}