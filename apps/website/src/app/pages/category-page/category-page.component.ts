import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';
import { getProfileTypeByPlatform } from '../../shared/utils';

@Component({
  selector: 'pp-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  providers:[TitleCasePipe]
})
export class CategoryPageComponent implements OnInit {

  title: string = "";
    source: string = "";
  platform: string = "";
  keywords: string = "";
  sourceName: string = "";

  constructor(
    private route: ActivatedRoute,
    private titleCase: TitleCasePipe,
    private seoService: SeoService
  ) { }

  async ngOnInit() {
    this.setParams(this.route.snapshot.params);

    this.route.params.subscribe((params) => {
      this.setParams(params)
    });

    if (this.route.snapshot.data['data']) {
      this.keywords = this.route.snapshot.data['data'].payload;
    } else {
      // please add the category service when you will be create
// const response = await this.categor
    }
  }

  private setParams(data: Params): void {
    this.source = data['source'];
    this.sourceName = this.titleCase.transform(this.source.replace(/-/g, " "));
    const title = this.titleCase.transform(this.source.replace(/-/g, " "));
    this.platform = data['platform']

    this.title = `Browse All ${title}`;
    if (this.platform)
      this.title += ` for top ${this.platform} ${getProfileTypeByPlatform(this.platform)}`;
    this.seoService.setPageMetaData({
      title: this.title,
      description: `Find top social media influencers`,
      keywords: ["influencers", "social media", this.source],
    });



  }

}

