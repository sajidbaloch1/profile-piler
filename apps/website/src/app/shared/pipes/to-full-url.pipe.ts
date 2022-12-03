import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFullUrl'
})
export class ToFullUrlPipe implements PipeTransform {
  transform(url: string, ...args: any[]): any {
    if (!url) {
      return url;
    }
    if (url.indexOf('http') === -1 || url.indexOf('https') == -1) {
      return `https://${url}`;
    }
    return url;
  }
}
