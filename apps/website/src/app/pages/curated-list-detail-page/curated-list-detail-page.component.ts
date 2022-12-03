import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  CuratedListDataService,
  ICuratedListItem,
  ICuratedListItemRs,
} from "./data.service";
import { SeoService } from "./../../shared/services/seo.service";
@Component({
  selector: "app-curated-list-detail-page",
  templateUrl: "./curated-list-detail-page.component.html",
  styleUrls: ["./curated-list-detail-page.component.css"],
})
export class CuratedListDetailPageComponent implements OnInit {
  list: ICuratedListItem | null = null;
  isLoading: boolean = false;
  error: string;

  constructor(
    private dataService: CuratedListDataService,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((routeData) => {
      if (routeData.data) this.setList(routeData.data);
      else this.loadList();
    });
  }

  private setSeo() {
    this.seoService.setPageMetaData({
      title: this.list.title,
      description: this.list.description,
      keywords: this.list.tags,
    });
  }

  private setList(listRs: ICuratedListItemRs) {
    console.log(listRs);
    if (listRs?.data) {
      this.list = listRs.data;
      this.setSeo();
    } else {
      this.error = "Something went wrong, Please refresh the tab";
      console.log(this.error);
    }
  }

  private async loadList() {
    this.isLoading = true;
    const res = await this.dataService
      .getListItem(this.route.snapshot.params.seo_url)
      .toPromise();
    this.setList(res);
    this.isLoading = false;
  }
}
