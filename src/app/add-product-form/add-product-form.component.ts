import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class AddProductFormComponent implements OnInit {
  product!: Product;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      logo: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      releaseDate: ['', [Validators.required, dateFormatValidator(), Validators.minLength(10), Validators.maxLength(10)]],
      restructureDate: ['', [Validators.required, dateFormatValidator()]],
    });

    this.form.get('releaseDate')?.valueChanges.subscribe(newReleaseDate => {
      const newRestructureDate = generateDateOneYearFurther(newReleaseDate);
      this.form.get('restructureDate')?.setValue(newRestructureDate);
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Date submitted:', this.form.value.date);
    } else {
      console.log('Invalid date format');
    }
  }
}
