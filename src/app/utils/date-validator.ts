import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function dateFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    const dateFormatRegex =
      /^(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])-\d{4}$/;
    if (value && !dateFormatRegex.test(value)) {
      return { invalidDateFormat: true };
    }
    return null;
  };
}

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }

    const selectedDate = new Date(control.value);
    const today = new Date();

    if (selectedDate < today) {
      return { 'futureDate': true };
    }

    return null;
  }
}
