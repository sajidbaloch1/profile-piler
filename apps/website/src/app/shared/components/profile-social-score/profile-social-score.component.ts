import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { ProfileViewModel } from '../../models';
import { SocialFeedModel } from '../../models/social-feed-model';
import { ProfileStatsModel } from '../../models/profile-stats-model';
import { ProfileStats } from '../../models/profile-stats';

@Component({
  selector: 'app-profile-social-score',
  templateUrl: './profile-social-score.component.html',
  styleUrls: ['./profile-social-score.component.css'],
})
export class ProfileSocialScoreComponent implements OnChanges {
  @Input() profile: ProfileViewModel;
  @Input() posts: SocialFeedModel[];
  @Input() platform: string;

  profileStats: ProfileStatsModel;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.profile && Array.isArray(this.posts)) {
      this.profileStats = new ProfileStats(
        this.profile,
        this.posts
      ).calculate();
    }
  }
}
