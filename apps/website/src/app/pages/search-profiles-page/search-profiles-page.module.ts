import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProfilesPageComponent } from './search-profiles-page.component';
import { SearchProfilesPageRoutingModule } from './search-profiles-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SearchProfilesPageComponent],
  imports: [CommonModule, SearchProfilesPageRoutingModule, SharedModule],
})
export class SearchProfilesPageModule {}
