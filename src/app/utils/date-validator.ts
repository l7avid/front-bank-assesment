import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function dateFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    const dateFormatRegex =
      /^(0[1-9]|1[1-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])-\d{4}$/;
    if (value && !dateFormatRegex.test(value)) {
      return { invalidDateFormat: true };
    }
    return null;
  };
}

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      // If the control value is empty, return null (no validation error)
      return null;
    }

    const selectedDate = new Date(control.value);
    const today = new Date();

    if (selectedDate < today) {
      // If the selected date is in the past, return a validation error
      return { 'futureDate': true };
    }

    // If the selected date is today or in the future, return null (no validation error)
    return null;
  }
}
