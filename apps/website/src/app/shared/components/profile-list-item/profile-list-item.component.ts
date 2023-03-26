import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileViewModel } from '../../models/profile-view-model';
import { SocialEntity } from '../../models/social.entity';
import { generateExternalLink } from '../../utils';

@Component({
  selector: 'pp-profile-list-item',
  templateUrl: './profile-list-item.component.html',
  styleUrls: ['./profile-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileListItemComponent implements OnInit, OnDestroy {
  @Input()
  profile!: ProfileViewModel;
  @Input() searchTerm: string = "";
  @Input() showDescription = true;
  @Input() socialEntity?: SocialEntity;

  socialEntitySub?: Subscription;
  showFullDescription = false;

  ngOnDestroy(): void {
    if (this.socialEntitySub) {
      this.socialEntitySub.unsubscribe();
    }
  }
  constructor() {
  }
  ngOnInit() {
  }

  getPlatformIconName() {
    let name = (this.profile.Platform as string).toLocaleLowerCase();
    switch (this.profile.Platform) {
      case "TT":
        name = "tiktok";
        break;
      case "Facebook":
        name = "facebook";
        break;
      case "YT":
        name = "youtube";
        break;
      case "Twitter":
        name = "twitter";
        break;
      case "IG":
        name = "instagram";
        break;
      case "TravelMassive":
        name = "TravelMassive";
        break;
    }
    return name;
  }

  generateExternalLink() {
    return generateExternalLink(
      this.profile.Platform,
      this.profile.RelativeURL
    );
  }

  parseLineBreaks(str: string) {
    return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
  }

  parseShortDescription(str: string) {
    if (!str) {
      return "";
    }
    str = str.replace(/[\r\n]+/g, "\n");
    return this.parseLineBreaks(str.substring(0, 550));
  }

  locationText() {
    let txt = this.profile.City ? this.profile.City : "";
    if (this.profile.City && this.profile.Location) {
      txt = `${txt}, `;
    }
    return `${txt}${this.profile.Location}`;
  }
}
