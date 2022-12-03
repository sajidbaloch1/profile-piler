import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileViewModel } from '../../shared/models';
import { scrollToEl } from '../../shared/utils';
import { ProfilePageDataService } from './data.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  profile: ProfileViewModel;

  constructor(
    private route: ActivatedRoute,
    private dataService: ProfilePageDataService,
    // private changeRef: ChangeDetectorRef,
    private activeRoute: ActivatedRoute
  ) {}

  parseLineBreaks(str: string) {
    if (!str) {
      return str;
    }
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

  ngOnInit() {
    scrollToEl('profile-section');
    this.dataService.subscribeDataStream(this.activeRoute);
    this.dataService.dataStream.subscribe((profile) => {
      this.profile = profile;
    });

    if (this.route.snapshot.queryParams.stats) {
      scrollToEl('profile-social-feed');
    }
  }
}
