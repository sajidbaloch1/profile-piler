import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HttpClientModule } from '@angular/common/http';
import { PlatformSelectorComponent } from './components/platform-selector/platform-selector.component';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PlateformIconComponent } from './components/plateform-icon/plateform-icon.component';
import { PlateformSelectorContentComponent } from './components/plateform-selector-content/plateform-selector-content.component';
import { MessageService } from 'primeng/api';
import { PlatformStatsComponent } from './components/platform-stats/platform-stats.component';
import { AnimatedDigitComponent } from './components/animated-digit/animated-digit.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { FiltersComponent } from './components/filters/filters.component';
import { PaginationRenderComponent } from './components/pagination-render/pagination-render.component';
import { ProfileListItemComponent } from './components/profile-list-item/profile-list-item.component';
import { ProfileSkeletonComponent } from './components/profile-skeleton/profile-skeleton.component';
import { ProfileSocialFeedComponent } from './components/profile-social-feed/profile-social-feed.component';
import { ProfileSocialScoreComponent } from './components/profile-social-score/profile-social-score.component';
import { SocialEntityRenderComponent } from './components/social-entity-render/social-entity-render.component';
import { SocialFeedItemComponent } from './components/social-feed-item/social-feed-item.component';
import { SocialPlatformFeedComponent } from './components/social-platform-feed/social-platform-feed.component';
import { PipesModule } from './pipes/pipes.module';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchProfileComponent, SearchFormComponent, PlatformSelectorComponent, PlateformIconComponent, PlateformSelectorContentComponent, PlatformStatsComponent, AnimatedDigitComponent, AutoCompleteComponent, FiltersComponent, PaginationRenderComponent, ProfileListItemComponent, ProfileSkeletonComponent, ProfileSocialFeedComponent, ProfileSocialScoreComponent, SocialEntityRenderComponent, SocialFeedItemComponent, SocialPlatformFeedComponent],
  imports: [CommonModule, MenubarModule, ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    StyleClassModule,
    RippleModule,
    OverlayPanelModule,
    HttpClientModule,
    DialogModule,
    TableModule,
    FormsModule,
    CardModule,
    DynamicDialogModule,
    PipesModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, FooterComponent, SearchFormComponent, SearchProfileComponent, PipesModule, FormsModule,DropdownModule],
  providers: [DialogService, MessageService]
})
export class SharedModule { }
