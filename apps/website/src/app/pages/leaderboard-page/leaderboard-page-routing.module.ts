import { NgModule } from '@angular/core';
import { LeaderboardPageComponent } from './leaderboard-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: LeaderboardPageComponent }];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class LeaderboardPageRoutingModule {}
