import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TableModule } from 'primeng/table';
import { MenuComponent } from './layouts/menu/menu.component';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { BadgeModule } from 'primeng/badge';
import { AppMenuitemComponent } from './layouts/menu/menuitem.component';
import { TagsModule } from './pages/tags/tags.module';
import { FailedJobsModule } from './pages/failed-jobs/failed-jobs.module';
import { SearchLogsModule } from './pages/search-logs/search-logs.module';
import { JobsModule } from './pages/jobs/jobs.module';
import { CuratedListModule } from './pages/curated-list/curated-list.module';
import { KeywordsModule } from './pages/keywords/keywords.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';




@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    AppMenuitemComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    SharedModule,
    HttpClientModule,
    SidebarModule,
    BadgeModule,
    RouterModule,
    DashboardModule,
    TagsModule,
    FailedJobsModule,
    SearchLogsModule,
    JobsModule,
    CuratedListModule,
    KeywordsModule,
    
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
