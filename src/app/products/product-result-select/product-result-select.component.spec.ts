import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductResultSelectComponent } from './product-result-select.component';

describe('ProductResultSelectComponent', () => {
  let component: ProductResultSelectComponent;
  let fixture: ComponentFixture<ProductResultSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductResultSelectComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductResultSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit quantitySelected event when onSelectChange is called', () => {
    const quantity = 10;
    const emitSpy = spyOn(component.quantitySelected, 'emit');
    
    component.selectedQuantity = quantity;
    component.onSelectChange();

    expect(emitSpy).toHaveBeenCalledWith(quantity);
  });
});
