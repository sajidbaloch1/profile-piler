import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  keyword: string;
  selectedPlatforms = [];
  description = `ProfilePiler is the world's largest collection of publicly available social profiles on the internet.
  The platform aggregates the social profiles from various social networks,
  showcases linked social accounts and outlines the recent social activity for a particular profile.
  You can browse profiles by keywords, account name, network, location and various other available filters.`;

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setPageMetaData({
      title: "World's Largest Database of Public Social Profiles",
      description: this.description,
      keywords: ['social profiles', 'social media'],
    });
  }
  onSearchBtnClkd() {
    if (!this.keyword) {
      return;
    }
    let url = this.keyword.replace(' ', '-');
    if (this.selectedPlatforms.length > 0) {
      url = `${url}/${this.selectedPlatforms.join('-')}`;
    }
    this.router.navigateByUrl(`/profiles/${url}`);
  }
}
