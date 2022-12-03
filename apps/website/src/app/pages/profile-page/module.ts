import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { ProfileStatsComponent } from './profile-stats/profile-stats.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageDataResolver } from './data-resolver';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    resolve: {
      profile: ProfilePageDataResolver,
    },
  },
];
@NgModule({
  declarations: [ProfilePageComponent, ProfileStatsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ProfilePageModule {}
