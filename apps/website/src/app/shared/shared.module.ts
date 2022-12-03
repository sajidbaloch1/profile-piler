import {
  NgbModalModule,
  NgbTooltipModule,
  NgbTypeaheadModule,
  NgbNavModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjaxService } from './services/ajax.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProfileListItemComponent } from './components/profile-list-item/profile-list-item.component';
import { PaginationRendererComponent } from './components/pagination-renderer/pagination-renderer.component';
import { PlatformService } from './services/platform.service';
import { GoogleAnalyticsService } from './services/google-analytics.service';

import { PipesModule } from './pipes/pipes.module';

import { PlatformSelectorComponent } from './components/platform-selector/platform-selector.component';
import { ProfileSocialFeedComponent } from './components/profile-social-feed/profile-social-feed.component';
import { PlatformIconComponent } from './components/platform-icon/platform-icon.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProfileSkeletonComponent } from './components/profile-skeleton/profile-skeleton.component';
import { EmbedoService } from './services/embedo.service';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { TwitterFiltersComponent } from './components/filters/twitter-filters/twitter-filters.component';
import { YoutubeFiltersComponent } from './components/filters/youtube-filters/youtube-filters.component';
import { InstagramFiltersComponent } from './components/filters/instagram-filters/instagram-filters.component';
import { TiktokFiltersComponent } from './components/filters/tiktok-filters/tiktok-filters.component';
import { TravelMassiveFiltersComponent } from './components/filters/travel-massive-filters/travel-massive-filters.component';
import { FlickrFiltersComponent } from './components/filters/flickr-filters/flickr-filters.component';
import { PinterestFiltersComponent } from './components/filters/pinterest-filters/pinterest-filters.component';
import { QuoraFiltersComponent } from './components/filters/quora-filters/quora-filters.component';
import { FbFiltersComponent } from './components/filters/fb-filters/fb-filters.component';
import { PlatformStatsComponent } from './components/platform-stats/platform-stats.component';
import { SocialEntityRendererComponent } from './components/social-entity-renderer/social-entity-renderer.component';
import { SocialPlatformFeedComponent } from './components/social-platform-feed/social-platform-feed.component';
import { SocialFeedItemComponent } from './components/social-feed-item/social-feed-item.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { AnimatedDigitComponent } from './components/animated-digit/animated-digit.component';
import { CountToDirective } from './directives/count-to.directive';
import { ProfileSocialScoreComponent } from './components/profile-social-score/profile-social-score.component';
import { TransferStateService } from './services/transfer-state.service';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProfileListItemComponent,
    PaginationRendererComponent,
    PlatformSelectorComponent,
    ProfileSocialFeedComponent,
    SocialFeedItemComponent,
    PlatformIconComponent,
    ProfileSkeletonComponent,
    AutoCompleteComponent,
    SearchFormComponent,
    TwitterFiltersComponent,
    YoutubeFiltersComponent,
    InstagramFiltersComponent,
    TiktokFiltersComponent,
    TravelMassiveFiltersComponent,
    FlickrFiltersComponent,
    PinterestFiltersComponent,
    QuoraFiltersComponent,
    FbFiltersComponent,
    SearchFormComponent,
    PlatformStatsComponent,
    SocialEntityRendererComponent,
    SocialPlatformFeedComponent,
    AnimatedDigitComponent,
    CountToDirective,
    ProfileSocialScoreComponent,
    SearchProfileComponent,
  ],
  providers: [
    AjaxService,
    EmbedoService,
    TransferStateService,
    PlatformService,
    GoogleAnalyticsService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    NgbModalModule,
    NgbTooltipModule,
    NgbCollapseModule,
    PipesModule,
    NgxSkeletonLoaderModule,
    NgbTypeaheadModule,
    NgbNavModule,
    NgxMasonryModule,
    BrowserTransferStateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    FormsModule,
    ProfileListItemComponent,
    PaginationRendererComponent,
    PlatformSelectorComponent,
    ProfileSocialFeedComponent,
    SocialFeedItemComponent,
    PipesModule,
    PlatformIconComponent,
    NgxSkeletonLoaderModule,
    ProfileSkeletonComponent,
    AutoCompleteComponent,
    SearchFormComponent,
    PlatformStatsComponent,
    SocialEntityRendererComponent,
    SocialPlatformFeedComponent,
    CountToDirective,
    ProfileSocialScoreComponent,
    SearchProfileComponent,
  ],
})
export class SharedModule {}
