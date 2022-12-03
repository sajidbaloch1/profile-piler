import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toShortNumber',
})
export class ToShortNumberPipe implements PipeTransform {
  transform(value: number, showName = false): any {
    return this.formatNumberWithMetricPrefix(value, 1, showName);
  }

  formatNumberWithMetricPrefix(num, digits = 1, showName = false) {
    if (!num && num !== 0) {
      return '';
    }
    const si = [
      { value: 1e18, symbol: 'E', name: '' },
      { value: 1e15, symbol: 'P', name: '' },
      { value: 1e12, symbol: 'T', name: ' trillion' },
      { value: 1e9, symbol: 'B', name: '' },
      { value: 1e6, symbol: 'M', name: ' million' },
      { value: 1e3, symbol: 'k', name: ' thousand' },
      { value: 0, symbol: '', name: '' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    function divideNum(divider) {
      return (num / (divider || 1)).toFixed(digits);
    }

    let i = si.findIndex(({ value }) => num >= value);
    if (+divideNum(si[i].value) >= 1e3 && si[i - 1]) {
      i -= 1;
    }
    const { value, symbol, name } = si[i];
    return divideNum(value).replace(rx, '$1') + (showName ? name : symbol);
  }
}
