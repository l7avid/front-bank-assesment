import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResultSelectComponent } from './product-result-select.component';

describe('ProductResultSelectComponent', () => {
  let component: ProductResultSelectComponent;
  let fixture: ComponentFixture<ProductResultSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductResultSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductResultSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
