import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs';
import { IPaginationData } from '../../shared/models/pagination-data';
import { CuratedListDataService, ICuratedListItem, ICuratedListItemRs } from '../curated-list-detail-page/data.service';

@Component({
  selector: 'pp-curated-list',
  templateUrl: './curated-list.component.html',
  styleUrls: ['./curated-list.component.scss'],
})
export class CuratedListComponent implements OnInit {
  lists: ICuratedListItem[] | any;
  paginationData?: IPaginationData;
  loadingData: boolean = false;
  dataError?: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private dataService: CuratedListDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe((routeData: { data?: ICuratedListItemRs }) => {
      if (routeData.data) {
        this.lists = routeData.data.data;
        this.paginationData = routeData.data["meta"];
      } else {
        this.loadData();
      }
    });
    this.activeRoute.queryParams.pipe(skip(1)).subscribe(() => {
      this.loadData();
    })
  }

  private async loadData() {
    this.loadingData = true;
    const response = await this.dataService.getLists(this.activeRoute.snapshot.queryParams).toPromise();

    this.loadingData = false;
    if (response?.data) {
      this.lists = response.data;
      this.paginationData = response.meta
    } else {
      this.dataError = "Unexpected Error!"
    }
  }

  pageChange(pageNo: number) {
    this.router.navigate(["Lists"], {
      preserveFragment: true,
      queryParams: { page: pageNo },
      queryParamsHandling: "merge"
    })
  }

}
