import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  UrlSegment,
  UrlMatchResult,
} from '@angular/router';
import { topProfileSlug } from './shared/utils';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const profileUrlMatcher = (segments: UrlSegment[]): UrlMatchResult | null => {
  if (
    segments.length === 1 &&
    segments[0].path.indexOf(topProfileSlug) !== -1
  ) {
    return {
      consumed: segments,
      posParams: {
        keyword: new UrlSegment(
          segments[0].path.replace(topProfileSlug, ''),
          {}
        ),
      },
    };
  } else if (segments.length === 1 && segments[0].path.indexOf('top-') !== -1) {
    const parts = segments[0].path.split('-');
    return {
      consumed: segments,
      posParams: {
        platforms: new UrlSegment(parts[1], {}),
        keyword: new UrlSegment(parts.splice(4).join('-'), {}),
      },
    };
  }
  return null;
};

const listingPageRouteConfig = {
  loadChildren: () =>
    import('../app/pages/list-page/list-page.module').then(
      (m) => m.ListPageModule
    ),
  data: { state: 'list-page', title: 'List Page' },
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
    data: { state: 'home-page', title: 'Home' },
  },
  {
    matcher: profileUrlMatcher,
    ...listingPageRouteConfig,
  },
  {
    path: 'profiles',
    ...listingPageRouteConfig,
  },
  {
    path: 'profiles/by-platform/:platforms',
    ...listingPageRouteConfig,
  },
  {
    path: 'profiles/:keyword/top-social-media-profiles',
    ...listingPageRouteConfig,
  },
  {
    path: 'profiles/:keyword',
    ...listingPageRouteConfig,
  },
  {
    path: 'profiles/:keyword/:platforms',
    ...listingPageRouteConfig,
  },
  {
    path: 'profile/:platform/:relativeURL',
    loadChildren: () =>
      import('./pages/profile-page/module').then((m) => m.ProfilePageModule),
    data: { state: 'profile-page', title: 'Profile Page' },
  },
  {
    path: 'search-profiles/topics',
    loadChildren: () =>
      import('../app/pages/keyword-page/keyword-page.module').then(
        (m) => m.KeywordPageModule
      ),
    data: { state: 'keyword-page', title: 'Keywords' },
  },
  {
    path: 'search-profiles/topics/:platform',
    loadChildren: () =>
      import('../app/pages/keyword-page/keyword-page.module').then(
        (m) => m.KeywordPageModule
      ),
    data: { state: 'keyword-page', title: 'Keywords' },
  },
  {
    path: 'categories/:source',
    loadChildren: () =>
      import('../app/pages/category-page/category-page.module').then(
        (m) => m.CategoryPageModule
      ),
    data: { state: 'category-page', title: 'Category' },
  },
  {
    path: 'categories/:source/:platform',
    loadChildren: () =>
      import('../app/pages/category-page/category-page.module').then(
        (m) => m.CategoryPageModule
      ),
    data: { state: 'category-page', title: 'Category' },
  },
  {
    path: 'search-profiles/network',
    loadChildren: () =>
      import('../app/pages/network-page/network-page.module').then(
        (m) => m.NetworkPageModule
      ),
    data: { state: 'network-page', title: 'Network' },
  },
  {
    path: 'search-profiles',
    loadChildren: () =>
      import(
        '../app/pages/search-profiles-page/search-profiles-page.module'
      ).then((m) => m.SearchProfilesPageModule),
    data: { state: 'search-profiles-page', title: 'Search Profiles' },
  },
  {
    path: 'leaderboard',
    loadChildren: () =>
      import('../app/pages/leaderboard-page/leaderboard-page.module').then(
        (m) => m.LeaderboardPageModule
      ),
    data: { state: 'leaderboard-page', title: 'Leaderboard' },
  },
  {
    path: 'lists',
    loadChildren: () =>
      import('../app/pages/curated-list/module').then(
        (m) => m.CuratedListPageModule
      ),
    data: { state: 'CuratedLists', title: 'Curated Lists' },
  },
  {
    path: 'lists/:seo_url',
    loadChildren: () =>
      import('../app/pages/curated-list-detail-page/module').then(
        (m) => m.CuratedListDetailPageModule
      ),
    data: { state: 'CuratedList', title: 'Curated List' },
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('../app/pages/contact-page/module').then(
        (m) => m.ContactPageModule
      ),
    data: { state: 'ContactPage', title: 'Contact Us' },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
