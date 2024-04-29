import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() options: string[] = []
  @Output() selectionChange = new EventEmitter<string>();

  value:string = '';

  constructor(private router: Router) {}

  onSelectionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.value = value;
    this.selectionChange.emit(value);
  }
}
