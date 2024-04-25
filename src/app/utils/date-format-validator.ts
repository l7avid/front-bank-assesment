import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function dateFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    const dateFormatRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (value && !dateFormatRegex.test(value)) {
      return { invalidDateFormat: true };
    }
    return null;
  };
}