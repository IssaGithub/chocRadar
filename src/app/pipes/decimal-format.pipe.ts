import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFormat',
  standalone: true,
})
export class DecimalFormatPipe implements PipeTransform {
  transform(value: number | string, decimalPlaces: number): string {
    if (value === null || isNaN(Number(value))) {
      return '';
    }

    return Number(value).toFixed(decimalPlaces);
  }
}
