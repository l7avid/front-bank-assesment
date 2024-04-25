import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class myDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: Date): string {
    return this.datePipe.transform(value, 'MM-dd-yyyy')!;
  }

}
