import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';
import {
  buildProfilesPageUrl,
  getProfileTypeByPlatform,
} from '../../shared/utils';

import { CategoryService, KeywordModel, ResultModel } from './category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  providers: [TitleCasePipe],
})
export class CategoryPageComponent implements OnInit {
  title = '';
  source = '';
  platform = '';
  keywrods: ResultModel[] = [];
  sourceName: string;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private titleCase: TitleCasePipe,
    private seoService: SeoService
  ) {}

  async ngOnInit() {
    this.setParams(this.route.snapshot.params);

    this.route.params.subscribe((params) => {
      this.setParams(params);
    });

    if (this.route.snapshot.data.data) {
      this.keywrods = this.route.snapshot.data.data.payload;
    } else {
      const response = await this.categoryService
        .getCategories(this.source)
        .toPromise();
      this.keywrods = response.payload;
    }
  }

  getTotal(keywords: KeywordModel[]) {
    return keywords.reduce((t, m) => m.resultsCount + t, 0);
  }

  getSearchLink(keyword: string) {
    return buildProfilesPageUrl(keyword, this.platform);
  }

  private setParams(data: Params): void {
    this.source = data.source;
    this.sourceName = this.titleCase.transform(this.source.replace(/-/g, ' '));
    const title = this.titleCase.transform(this.source.replace(/-/g, ' '));
    this.platform = data.platform;

    this.title = `Browse All ${title}`;
    if (this.platform)
      this.title += ` for top ${this.platform} ${getProfileTypeByPlatform(
        this.platform
      )}`;
    this.seoService.setPageMetaData({
      title: this.title,
      description: `Find top social media influencers`,
      keywords: ['influencers', 'social media', this.source],
    });
  }
}
