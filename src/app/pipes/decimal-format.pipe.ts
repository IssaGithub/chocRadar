import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFormat',
  standalone: true,
})
export class DecimalFormatPipe implements PipeTransform {
  transform(value: number | string | undefined, decimalPlaces: number): string {
    if (value === null || isNaN(Number(value))) {
      return '0';
    }

    return Number(value).toFixed(decimalPlaces);
  }
}
