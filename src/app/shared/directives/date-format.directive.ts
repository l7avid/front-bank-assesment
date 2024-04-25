import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appDateFormat][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateFormatDirective, multi: true }]
})
export class DateFormatDirective implements Validator {

  @Input('dateFormat') dateFormat!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = new RegExp(this.dateFormat);
    if (!regex.test(value)) {
      return { 'invalidDateFormat': true };
    }
    return null;
  }
}