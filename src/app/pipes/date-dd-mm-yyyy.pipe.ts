import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDdMmYyyy'
})
export class DateDdMmYyyyPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: Date): string {
    return this.datePipe.transform(value, 'dd-MM-yyyy')!;
  }

}
