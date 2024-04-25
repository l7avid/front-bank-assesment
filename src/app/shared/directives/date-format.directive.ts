import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appDateFormat]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateFormatDirective, multi: true }]
})
export class DateFormatDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const validDatePattern = /^\d{2}-\d{2}-\d{4}$/;
    const isValid = validDatePattern.test(control.value);
    return isValid ? null : { invalidDateFormat: true };
  }
}