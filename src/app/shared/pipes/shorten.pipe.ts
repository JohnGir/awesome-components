import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, maxiLength: number = 50): string {
    if (value.length <= maxiLength) {
      return value;
    }
    return value.substring(0, maxiLength) + '...';
  }
}
