import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ProfileViewModel } from './shared/models/profile-view-model';
import { GoogleAnalyticsService } from './shared/services/google-analytics.service';

@Component({
  selector: 'pp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = "profiler-frontend";
  profiles: ProfileViewModel[] = [];
  showPageLoading = false;
  constructor(private primengConfig: PrimeNGConfig, router: Router, googleAnalytic: GoogleAnalyticsService) {
    /**
     * page loader
     */
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.showPageLoading = true;
      } else if (e instanceof NavigationEnd) {
        this.showPageLoading = false;
        googleAnalytic.pageViewEmitter(e.urlAfterRedirects);
      }
    });
   }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
