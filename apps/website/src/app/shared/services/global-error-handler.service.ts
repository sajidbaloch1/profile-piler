import { Injectable, ErrorHandler } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AjaxService } from './ajax.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private ajax: AjaxService) {}

  handleError(error: Error): void {
    console.error(error);
    /**
     * Dump in the database for further investigations
     */
    if (!environment.production) { 
      return;
    }

    try {
      this.ajax
        .post('log-error', {
          message: error.message,
          stackTrace: error.stack,
          location: `${window.location.pathname}${window.location.search}`,
          browserInfo: `vendor:${navigator.vendor},platform:${navigator.platform},userAgent:${navigator.userAgent}`,
        })
        .toPromise();
    } catch (err) {
      console.error(err);
    }
  }
}
