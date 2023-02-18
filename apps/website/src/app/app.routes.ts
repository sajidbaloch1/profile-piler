import { Route } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
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
    path: 'lists',
    loadChildren: () =>
      import("../app/pages/curated-list/curated-list.module").then((m) => m.CuratedListModule)
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'categories/:source',
    loadChildren: () =>
      import("../app/pages/category-page/category-page.module").then(
        (m) => m.CategoryPageModule), data: { state: "category-page", title: 'Category' }
  },
  {
    path: 'categories/:source/:platform',
    loadChildren: () =>
      import("../app/pages/category-page/category-page.module").then(
        (m) => m.CategoryPageModule), data: { state: "category-page", title: 'Category' }
  },
  {
    path: 'search-profiles',
    loadChildren: () =>
      import("../app/pages/search-profiles-page/search-profiles-page.module").then((m) => m.SearchProfilesPageModule), data: { state: 'search-profiles-page', title: 'Search Profiles' }
  }, {
    path: 'search-profiles/network',
    loadChildren: () =>
      import("../app/pages/network-page/network-page.module").then((m) => m.NetworkPageModule), data: { state: "network-page", title: "Network" },
  }
];
