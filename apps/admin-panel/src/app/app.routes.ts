import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import("./pages/dashboard/dashboard.module")
                .then((m) => m.DashboardModule)
    },
    {
        path: 'curated-lists',
        loadChildren: () =>
            import("./pages/curated-list/curated-list.module")
                .then((m) => m.CuratedListModule),

    },
    {
        path: 'tags',
        loadChildren: () =>
            import("./pages/tags/tags.module")
                .then((m) => m.TagsModule),
    },

    {
        path: 'failed-jobs',
        loadChildren: () =>
            import("./pages/failed-jobs/failed-jobs.module")
                .then((m) => m.FailedJobsModule),
    },
    {
        path: 'jobs',
        loadChildren: () =>
            import("./pages/jobs/jobs.module")
                .then((m) => m.JobsModule),
    },
    {
        path: 'keywords',
        loadChildren: () =>
            import("./pages/keywords/keywords.module")
                .then((m) => m.KeywordsModule),
    },
    {
        path: 'search-logs',
        loadChildren: () =>
            import("./pages/search-logs/search-logs.module")
                .then((m) => m.SearchLogsModule)
    }
];
