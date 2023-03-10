import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formNow'
})
export class FormNowPipe implements PipeTransform {

  transform(date: string, format?: string): any {
    if (!date) {
      return '';
    }
    if (!format) {
      format = 'YYYY-MM-DD H:m:s';
    }

    return moment.utc(date, format).fromNow();
  }
}
