import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { TreeSelectModule } from 'primeng/treeselect';
import { SplitButtonModule } from 'primeng/splitbutton';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuratedListComponent } from './pages/curated-list/curated-list.component';
import { PaginatorModule } from 'primeng/paginator';
import { ContactUsModule } from './pages/contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LandingPageComponent,
    CuratedListComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    PaginatorModule,
    FormsModule,
    InputTextModule,
    StyleClassModule,
    RippleModule,
    MenubarModule,
    TreeSelectModule,
    SplitButtonModule,
    SharedModule,
    ContactUsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
