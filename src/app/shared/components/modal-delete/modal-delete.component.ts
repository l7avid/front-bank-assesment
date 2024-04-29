import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  product?: Product;

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.getProductIdFromRoute();
    this.productService.getProductById(productId!).subscribe(productFound => {
      this.product = productFound;
    });
  }

  getProductIdFromRoute(): string | null {
    return this.route.snapshot.paramMap.get('id');
  }
  

  deleteProduct(): void {
    const productId = this.getProductIdFromRoute();
    if (productId) {
      this.productService.deleteProduct(productId);
      this.router.navigate(['']);
    }
  }

  closeModal(): void {
    this.router.navigateByUrl('');
  }
}
