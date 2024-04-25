import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { generateRandomDateFromToday } from '../utils/random-date-generator';
import { generateDateOneYearFurther } from '../utils/restructure-date-generator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateFormatValidator } from '../utils/date-format-validator';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent {
  product!: Product;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    const releaseDate1 = generateRandomDateFromToday();
    const restructureDate1 = generateDateOneYearFurther(releaseDate1);
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      logo: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      releaseDate: ['', [Validators.required, dateFormatValidator()]],
      restructureDate: ['', [Validators.required, dateFormatValidator()]],
       // Apply the custom validator
    });

    this.product = {
      id: '',
      logo: '',
      name: '',
      description: '',
      releaseDate: releaseDate1,
      restructureDate: restructureDate1,
    };
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Date submitted:', this.form.value.date);
    } else {
      console.log('Invalid date format');
    }
  }
}
