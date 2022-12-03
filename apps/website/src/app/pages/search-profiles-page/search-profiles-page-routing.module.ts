import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProfilesPageComponent } from './search-profiles-page.component';

const routes: Routes = [{ path: '', component: SearchProfilesPageComponent }];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class SearchProfilesPageRoutingModule {}
