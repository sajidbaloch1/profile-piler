import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProfilesPageComponent } from './search-profiles-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: "", component: SearchProfilesPageComponent }]
@NgModule({
  declarations: [
    SearchProfilesPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class SearchProfilesPageModule { }
