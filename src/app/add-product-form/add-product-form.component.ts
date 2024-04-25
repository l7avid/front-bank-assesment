import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { generateRandomDateFromToday } from '../utils/random-date-generator';
import { generateDateOneYearFurther } from '../utils/restructure-date-generator';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateFormatValidator } from '../utils/date-format-validator';
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  product!: Product;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      logo: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      releaseDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), dateFormatValidator()]],
      restructureDate: [''],
    });

    this.form.get('releaseDate')?.valueChanges.pipe(
      filter((value: string) => value.length === 10) // Filter out values with length not equal to 10
    ).subscribe(newReleaseDate => {
      const newRestructureDate = generateDateOneYearFurther(new Date(newReleaseDate));
      const finalRestructureDate = this.datePipe.transform(newRestructureDate, 'mm-dd-yyyy');
      this.form.get('restructureDate')!.setValue(finalRestructureDate);
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Date submitted:', this.form.value.date);
    } else {
      console.log('Invalid date format');
    }
  }
}
