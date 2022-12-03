import { Component, Input } from '@angular/core';

import { ProfileViewModel } from '../../../shared/models';
import { SocialEntityStats } from '../../../shared/models/social-entity';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.css'],
})
export class ProfileStatsComponent {
  @Input()
  profile: ProfileViewModel;

  get entity(): SocialEntityStats {
    return this.profile?.SocialEntity;
  }
}
