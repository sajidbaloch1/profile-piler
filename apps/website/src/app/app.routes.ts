import { Route } from '@angular/router';
import { CuratedListComponent } from './pages/curated-list/curated-list.component';
import { SearchProfileComponent } from './shared/components/search-profile/search-profile.component';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
          import("./pages/landing-page/landing-page.module").then(
            (m) => m.LandingPageModule
          ),
        data: { state: "home-page", title: "Home" },
      },
      {
        path: 'search-profile',
        component: SearchProfileComponent
      },
      {
        path: 'curated-list',
        component: CuratedListComponent
      },
];
