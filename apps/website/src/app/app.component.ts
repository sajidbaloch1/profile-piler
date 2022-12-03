import { Component, ViewEncapsulation } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";

import { ProfileViewModel } from "./shared/models/profile-view-model";
import { GoogleAnalyticsService } from "./shared/services/google-analytics.service";

@Component({
  selector: "app-root",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "profiler-frontend";
  profiles: ProfileViewModel[] = [];
  showPageLoading = false;

  constructor(router: Router, googleAnalytic: GoogleAnalyticsService) {
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
}
