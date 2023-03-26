import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';
import { CuratedListDataService, ICuratedListItem, ICuratedListItemRs } from './data.service';

@Component({
  selector: 'pp-curated-list-detail-page',
  templateUrl: './curated-list-detail-page.component.html',
  styleUrls: ['./curated-list-detail-page.component.scss']
})
export class CuratedListDetailPageComponent {
  list?: ICuratedListItem | null = null;
  isLoading: boolean = false;
  error?: string;

  constructor(
    private dataService: CuratedListDataService,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((routeData) => {
      if (routeData['data']) this.setList(routeData['data']);
      else this.loadList();
    });
  }

  private setSeo() {
    this.seoService.setPageMetaData({
      title: this.list?.title,
      description: this.list?.description,
      keywords: this.list?.tags,
    });
  }

  private setList(listRs: any) {
    if (listRs) {
      this.list = listRs;
      this.setSeo();
      console.log(this.list);
    } else {
      this.error = "Something went wrong, Please refresh the tab";
      console.log(this.error);
    }
  }
  private async loadList() {
    this.isLoading = true;
    const res: any = await this.dataService
      .getListItem(this.route.snapshot.params['seo_url'])
      .toPromise();
    this.setList(res);
    this.isLoading = false;
  }
}