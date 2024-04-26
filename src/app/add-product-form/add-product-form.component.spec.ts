// File: add-product-form.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductFormComponent } from './add-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ProductService } from '../services/product-service/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AddProductFormComponent', () => {
  let component: AddProductFormComponent;
  let fixture: ComponentFixture<AddProductFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductFormComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [DatePipe, ProductService], // Add necessary providers
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get("id")).toBeDefined();
    // Add more form field expectations
  });

  it('should validate the ID', () => {
    const control = component.form.get("id");
    control?.setValue("100"); // Set an existing ID
    expect(control?.hasError('idExists')).toBeTruthy();

    control?.setValue("200"); // Set a non-existing ID
    expect(control?.hasError('idExists')).toBeFalsy();
  });

  it('should update restructureDate when releaseDate changes', () => {
    const releaseDateControl = component.form.get("releaseDate");
    const restructureDateControl = component.form.get("restructureDate");

    releaseDateControl?.setValue("01-01-2023");
    fixture.detectChanges();

    expect(restructureDateControl?.value).toBe("01-01-2024");
  });

  it('should call addProduct when onSubmit is called', () => {
    const productService = TestBed.inject(ProductService);
    spyOn(productService, 'addProduct');

    component.form.setValue({
      id: '1',
      logo: 'logo.png',
      name: 'Product Name',
      description: 'Product Description',
      releaseDate: new Date('01-01-2023'),
      restructureDate: new Date('01-01-2024'),
    });

    component.onSubmit();

    expect(productService.addProduct).toHaveBeenCalledWith({
      id: '1',
      logo: 'logo.png',
      name: 'Product Name',
      description: 'Product Description',
      releaseDate: new Date('01-01-2023'),
      restructureDate: new Date('01-01-2024'),
    });
  });

  // Add more test cases as needed

  it('should reset the form', () => {
    component.form.setValue({
      id: '1',
      logo: 'logo.png',
      name: 'Product Name',
      description: 'Product Description',
      releaseDate: new Date('2023-01-01'),
      restructureDate: new Date('01-01-2024'),
    });
    component.resetForm();
    expect(component.form.value).toEqual({
      id: null,
      logo: null,
      name: null,
      description: null,
      releaseDate: null,
      restructureDate: null,
    });
  });

  it('should navigate to home page when closeForm is called', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');

    component.closeForm();

    expect(router.navigateByUrl).toHaveBeenCalledWith('');
  });
});
