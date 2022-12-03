import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ProfileViewModel } from "../../models";
import { NgbNavChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { getPlatformName } from "../../utils";
const FEED_AVAILABLE_PLATFORMS = [
  // "Facebook",
  "Twitter",
  "Youtube",
  // 'Instagram',
  "Pinterest",
  // "Tiktok",
  "Quora",
  "Flickr",
];

@Component({
  selector: "app-profile-social-feed",
  templateUrl: "./profile-social-feed.component.html",
  styleUrls: ["./profile-social-feed.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProfileSocialFeedComponent implements OnChanges {
  @Input()
  profile: ProfileViewModel;

  tabs: { platform: string; username: string }[] = [];
  currentTab = 0;

  ngOnChanges() {
    if (this.profile) {
      this.setupTabs();
    }
  }

  private isTabAdded(platform: string): boolean {
    return (
      this.tabs.findIndex(
        (t) => t.platform.toLowerCase() === platform.toLowerCase()
      ) !== -1
    );
  }

  private isFeedImplemented(platform: string): boolean {
    return FEED_AVAILABLE_PLATFORMS.indexOf(platform) !== -1;
  }

  private setupTabs() {
    const platformName = getPlatformName(this.profile.Platform);
    if (this.profile && this.isFeedImplemented(platformName)) {
      const defaultTab = {
        platform: platformName,
        username: this.profile.RelativeURL,
      };

      if (!this.isTabAdded(platformName)) {
        this.tabs.push(defaultTab);
      }
    }

    if (this.profile.SocialEntity) {
      FEED_AVAILABLE_PLATFORMS.forEach((p) => {
        if (this.profile.SocialEntity[p] && !this.isTabAdded(p)) {
          this.tabs.push({
            platform: p,
            username: this.profile.SocialEntity[p],
          });
        }
      });
    }
  }

  changeTab(evt: NgbNavChangeEvent) {
    this.currentTab = evt.nextId;
  }
}
