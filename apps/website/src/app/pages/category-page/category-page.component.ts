import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';
import { buildProfilesPageUrl, getProfileTypeByPlatform } from '../../shared/utils';
import { CategoryPageService, KeywordModel, ResultModel } from './category-page.service';

@Component({
  selector: 'pp-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  providers: [TitleCasePipe]
})
export class CategoryPageComponent implements OnInit {

  title: string = "";
  source: string = "";
  platform: string = "";
  keywords: ResultModel[] = [];
  sourceName: string = "";

  constructor(
    private route: ActivatedRoute,
    private titleCase: TitleCasePipe,
    private seoService: SeoService,
    private categoryService: CategoryPageService
  ) { }

  async ngOnInit() {
    this.setParams(this.route.snapshot.params);

    this.route.params.subscribe((params) => {
      this.setParams(params)
    });

    if (this.route.snapshot.data['data']) {
      this.keywords = this.route.snapshot.data['data'].payload;
    } else {
      const response: any = await this.categoryService
        .getCategories(this.source)
        .toPromise();
      this.keywords = response.payload;
    }
  }
  getTotal(keywords: KeywordModel[]) {
    return keywords.reduce((t, m) => m.resultCount + t, 0);
  }

  getSearchLink(keyword: string) {
    return buildProfilesPageUrl(keyword, this.platform);
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

