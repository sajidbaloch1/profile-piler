import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  public pageViewEmitter(path: string): void {
    if (typeof gtag === 'undefined') return;

    gtag('config', environment.googleAnalyticsAppId, {
      page_path: path,
    });
  }

  public eventEmitter(
    action: string,
    category: string,
    label: string,
    value: string = null
  ): void {
    if (typeof gtag === 'undefined') return;

    gtag('event', action, {
      event_category: category,
      event_label: label,
      event_value: value,
    });
  }
}
