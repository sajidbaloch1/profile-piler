import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs';
import { IPaginationData } from '../../shared/models/pagination-data';
import { CuratedListDataService, ICuratedListItem, ICuratedListItemRs, ICuratedListsRs } from '../curated-list-detail-page/data.service';

@Component({
  selector: 'pp-curated-list',
  templateUrl: './curated-list.component.html',
  styleUrls: ['./curated-list.component.scss'],
})
export class CuratedListComponent implements OnInit {
  lists?: ICuratedListItem[];
  paginationData?: IPaginationData;
  loadingData: boolean = false;
  dataError: string = "";

  constructor(
    private activeRotue: ActivatedRoute,
    private dataService: CuratedListDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRotue.data.subscribe((routeData: any) => {
      if (routeData['data']) {
        this.lists = routeData['data'];
        console.log(this.lists)
        this.paginationData = routeData.data.meta;
      } else this.loadData();
    });

    this.activeRotue.queryParams.pipe(skip(1)).subscribe(() => {
      this.loadData();
    });
  }

  private async loadData() {
    this.loadingData = true;
    const response = await this.dataService
      .getLists(this.activeRotue.snapshot.queryParams)
      .toPromise();
    this.loadingData = false;
    if (response?.data) {
      this.lists = response.data;
      this.paginationData = response.meta;
    } else this.dataError = "Unexpected Error!";
  }

  pageChange(pageNo: number) {
    this.router.navigate(["lists"], {
      preserveFragment: true,
      queryParams: { page: pageNo },
      queryParamsHandling: "merge",
    });
  }
}
