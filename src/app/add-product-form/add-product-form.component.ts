import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';
import { generateDateOneYearFurther } from '../utils/restructure-date-generator';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  dateFormatValidator,
  futureDateValidator,
} from '../utils/date-validator';
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs';
import { ProductService } from '../services/product-service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  @Output() editingCompleted = new EventEmitter<void>();

  form!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
          futureDateValidator(),
        ],
      ],
      restructureDate: [''],
    });

    this.form
      .get('releaseDate')
      ?.valueChanges.pipe(filter((value: string) => value?.length === 10))
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

    this.route.params.subscribe((params) => {
      const productId = params['id'];
      if (productId) {
        this.productService.getProductById(productId).subscribe((product) => {
          if (product) {
            const idControl = this.form.get('id');
            idControl?.setValidators([
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(10),
            ]);
            this.form.patchValue({
              id: product.id,
              logo: product.logo,
              name: product.name,
              description: product.description,
              releaseDate: this.formatDate(product.releaseDate),
              restructureDate: this.formatDate(product.restructureDate),
            });
          }
        });
      }
    });

    this.route.url.subscribe((urlSegments) => {
      this.isEditMode = urlSegments.some(
        (segment) => segment.path.toLowerCase() === 'edit'
      );
    });
  }

  formatDate(date: Date | undefined): string {
    if (!date) {
      return '';
    }
    return this.datePipe.transform(date, 'MM-dd-yyyy') || '';
  }

  onSubmit(): void {
    const product: Product = this.form.value;
    if (this.isEditMode) {
      this.productService.updateProduct(product);
    } else {
      this.productService.addProduct(product);
    }

    this.productService.emitEditingCompleted();
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

  resetForm() {
    this.form.reset();
  }

  closeForm() {
    this.router.navigateByUrl('');
  }
}
