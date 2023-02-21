import { Route, UrlMatchResult, UrlSegment } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { topProfileSlug } from './shared/utils';


const profileUrlMatcher = (segments: UrlSegment[]): UrlMatchResult | null => {
  if (
    segments.length === 1 &&
    segments[0].path.indexOf(topProfileSlug) !== -1
  ) {
    return {
      consumed: segments,
      posParams: {
        keyword: new UrlSegment(
          segments[0].path.replace(topProfileSlug, ""),
          {}
        ),
      },
    };
  } else if (segments.length === 1 && segments[0].path.indexOf("top-") !== -1) {
    const parts = segments[0].path.split("-");
    return {
      consumed: segments,
      posParams: {
        platforms: new UrlSegment(parts[1], {}),
        keyword: new UrlSegment(parts.splice(4).join("-"), {}),
      },
    };
  }
  return null;
};
const listingPageRouteConfig = {
  loadChildren: () =>
    import("../app/pages/list/list.module").then((m) => m.ListModule), data: { state: "list", title: 'List Page' }
}
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
    matcher: profileUrlMatcher,
    ...listingPageRouteConfig,
  }, {
    path: "Profiles",
    ...listingPageRouteConfig,
  }, {
    path: "profiles/by-platform/:platforms",
    ...listingPageRouteConfig,
  }, {
    path: "profiles/:keyword/top-social-media-profiles",
    ...listingPageRouteConfig,
  }, {
    path: "profiles/:keyword",
    ...listingPageRouteConfig,
  }, {
    path: "profiles/:keyword/:platform",
    ...listingPageRouteConfig
  },
  {
    path: 'lists',
    loadChildren: () =>
      import("../app/pages/curated-list/curated-list.module").then((m) => m.CuratedListModule), data: { state: "CuratedLists", title: "Curated Lists" }
  },
  {
    path: 'lists/:seo_url',
    loadChildren: () =>
      import("../app/pages/curated-list-detail-page/curated-list-detail-page.module").then((m) => m.CuratedListDetailPageModule), data: { state: "CuratedList", title: "Curated List" }
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
  },
  {
    path: 'search-profiles/topics',
    loadChildren: () =>
      import("../app/pages/keyword-page/keyword-page.module").then((m) => m.KeywordPageModule), data: { state: "keyword-page", title: "Keywords" },
  }, {
    path: 'search-profiles/topics/:platform',
    loadChildren: () =>
      import("../app/pages/keyword-page/keyword-page.module").then((m) => m.KeywordPageModule), data: { state: "keyword-page", title: 'Keywords' }
  },
  {
    path: "leaderboard",
    loadChildren: () =>
      import("../app/pages/leaderboard-page/leaderboard-page.module").then((m) => m.LeaderboardPageModule), data: { state: "leaderboard-page", title: "Leaderboard" }
  }, {
    path: "profile/:platform/:relativeURL",
    loadChildren: () =>
      import("../app/pages/profile-page/profile-page.module").then((m) => m.ProfilePageModule), data: { state: "profile-page", title: "Profile Page" }
  },
  {
    path: "**",
    component: NotFoundComponent,
  }

];
