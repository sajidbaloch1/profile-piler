import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  SimpleChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ProfileViewModel } from '../../models';
import { AjaxService } from '../../services/ajax.service';
import { SocialFeedModel } from '../../models/social-feed-model';
import { NgxMasonryComponent } from 'ngx-masonry';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-social-platform-feed',
  templateUrl: './social-platform-feed.component.html',
  styleUrls: ['./social-platform-feed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialPlatformFeedComponent
  implements OnInit, OnChanges, OnDestroy {
  @ViewChild(NgxMasonryComponent, { static: true })
  masonry: NgxMasonryComponent;
  @Input() profile: ProfileViewModel;
  @Input() platform: string;
  @Input() username: string;
  @Input() visible: boolean;

  socialStateNum = 100;
  // socialStateNum1 = 0;
  posts = [];

  viewParmas: { feedLoading: boolean; feedLoadError: boolean } = {
    feedLoading: false,
    feedLoadError: false,
  };

  private repaintIntervalId = null;

  constructor(
    private ajax: AjaxService,
    private changeRef: ChangeDetectorRef,
    private platformService: PlatformService
  ) {}

  ngOnInit(): void {
    if (this.platformService.isBrowser()) {
      window.addEventListener(
        'focus',
        () => {
          setTimeout(() => {
            this.repaintLayout();
          }, 250);
        },
        false
      );
    }
  }

  ngOnDestroy(): void {
    this.endRepaintInterval();
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.visible) {
      this.endRepaintInterval();
      if (change.visible.currentValue === true) {
        if (this.posts.length === 0) this.loadFeed();
        else {
          setTimeout(() => {
            this.startRepaintInterval();
          }, 500);
        }
      }
    }
  }

  feedItemLoaded() {
    setTimeout(() => {
      this.repaintLayout();
    }, 1000);
  }

  private repaintLayout() {
    this.masonry.reloadItems();
    this.masonry.layout();
  }

  async loadFeed() {
    try {
      this.viewParmas.feedLoading = true;
      this.viewParmas.feedLoadError = false;
      this.posts = [];
      const posts = await this.ajax
        .get<SocialFeedModel[]>(`social-feed/${this.platform}`, {
          relativeURL: this.username,
          userId: this.profile ? this.profile.PlatformID : null,
          secUid: this.profile ? this.profile.SecUid : null,
        })
        .toPromise();
      if (!Array.isArray(posts)) {
        this.viewParmas.feedLoadError = true;
      } else {
        this.posts = this.posts.concat(posts);
        this.startRepaintInterval();
      }
    } catch (err) {
      this.viewParmas.feedLoadError = true;
    }
    this.viewParmas.feedLoading = false;
    this.changeRef.detectChanges();
  }

  private startRepaintInterval() {
    this.repaintLayout();
    this.repaintIntervalId = setInterval(() => this.repaintLayout(), 2000);
  }

  private endRepaintInterval() {
    if (this.repaintIntervalId) {
      clearInterval(this.repaintIntervalId);
      this.repaintIntervalId = null;
    }
  }
}
