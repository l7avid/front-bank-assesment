import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { generateDateOneYearFurther } from '../utils/restructure-date-generator';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateFormatValidator, futureDateValidator } from '../utils/date-validator';
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  product!: Product;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private productService: ProductService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [
        '',
        [
          Validators.required,
          this.validateId.bind(this),
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      logo: ['', [Validators.required]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
      releaseDate: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          dateFormatValidator(),
          futureDateValidator()

        ],
      ],
      restructureDate: [''],
    });

    this.form
      .get('releaseDate')
      ?.valueChanges.pipe(filter((value: string) => value.length === 10))
      .subscribe((newReleaseDate) => {
        const newRestructureDate = generateDateOneYearFurther(
          new Date(newReleaseDate)
        );
        const finalRestructureDate = this.datePipe.transform(
          newRestructureDate,
          'MM-dd-yyyy'
        );
        this.form.get('restructureDate')!.setValue(finalRestructureDate);
      });
  }

  onSubmit(): void {
    const product: Product = this.form.value;
    this.productService.addProduct(product);
  }

  onTabPressed(event: Event) {
    if ((event as KeyboardEvent).key === 'Tab') {
      event.preventDefault();
    }
  }

  validateId(control: AbstractControl) {
    const id = control.value;
    if (this.productService.isAnExistingId(id)) {
      return { idExists: true };
    }
    return null;
  }
}
