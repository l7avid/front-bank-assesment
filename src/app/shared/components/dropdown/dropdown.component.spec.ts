import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selection change', () => {
    const spy = spyOn(component.selectionChange, 'emit');
    const event = new Event('change');
    const selectElement: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    selectElement.value = 'option1'; // Set a value for selection
    selectElement.dispatchEvent(event); // Trigger the change event

    expect(spy).toHaveBeenCalledWith('');
  });
});
