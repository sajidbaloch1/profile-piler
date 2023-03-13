import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxService } from '../../shared/services/ajax.service';
import { buildProfilesPageUrl } from '../../shared/utils';

@Component({
  selector: 'pp-keyword-page',
  templateUrl: './keyword-page.component.html',
  styleUrls: ['./keyword-page.component.scss']
})
export class KeywordPageComponent implements OnInit {
  keywords: KeywordModel[] = [];
  startWith = "";
  alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  platform?: string;

  constructor(
    private ajax: AjaxService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.queryParams.subscribe((newParams: any) => {
      this.startWith = newParams['startWith']
      this.loadKeywords(newParams)
    })
  }

  ngOnInit() {
    this.platform = this.activeRoute.snapshot.params['platform']
    this.activeRoute.params.subscribe((params) =>
      (this.platform = params['platform'])
    );
    this.loadKeywords();
  }

  private async loadKeywords(requestParams = null) {
    const response: any = await this.ajax.get<KeywordResponse>("keywords", requestParams)
      .toPromise();
    this.keywords = response.payload;
  }

  getTotal(keywords: KeywordModel[]) {
    return keywords.reduce((t, m) => m.resultsCount + t, 0)
  }
  getSearchLink(keyword: string) {
    return buildProfilesPageUrl(keyword, this.platform);
  }

}

interface KeywordResponse {
  payload: KeywordModel[]
}
interface KeywordModel {
  keyword: string;
  resultsCount: number;
}