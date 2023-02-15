import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'pp-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  keyword: string = "";
  selectedPlatforms = [];
  constructor(
    private router: Router,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.setPageMetaData({
      title: "World's Largest Database of Public Social Profiles",
      keywords: ["social profiles", "social media"],
    })
  }

  onSearchBtnClkd() {
    if (!this.keyword) {
      return;
    }
    let url = this.keyword.replace(" ", "-");
    if (this.selectedPlatforms.length > 0) {
      url = `${url}/${this.selectedPlatforms.join("-")}`;
    }
    this.router.navigateByUrl(`/profiles/${url}`);
  }
}