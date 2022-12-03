import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardPageComponent } from './leaderboard-page.component';
import { LeaderboardPageRoutingModule } from './leaderboard-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LeaderboardPageComponent],
  imports: [CommonModule, LeaderboardPageRoutingModule, SharedModule],
})
export class LeaderboardPageModule {}
