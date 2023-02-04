import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TableModule } from 'primeng/table';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { BadgeModule } from 'primeng/badge';
import { AppMenuitemComponent } from './layouts/menu/menuitem.component';



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent,AppMenuitemComponent, HeaderComponent, SidebarComponent, DashboardComponent, MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    SharedModule,
    HttpClientModule,
    SidebarModule,BadgeModule,
    RouterModule, 
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
