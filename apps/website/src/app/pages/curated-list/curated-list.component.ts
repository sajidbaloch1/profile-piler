import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs/operators';
import { IPaginationData } from '../../shared/models';
import {
  CuratedListDataService,
  ICuratedListItem,
  ICuratedListsRs,
} from '../curated-list-detail-page/data.service';

@Component({
  selector: 'app-curated-list',
  templateUrl: './curated-list.component.html',
  styleUrls: ['./curated-list.component.css'],
})
export class CuratedListComponent implements OnInit {
  lists: ICuratedListItem[];
  paginationData: IPaginationData;
  loadingData = false;
  dataError: string;

  constructor(
    private activeRotue: ActivatedRoute,
    private dataService: CuratedListDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRotue.data.subscribe((routeData: { data?: ICuratedListsRs }) => {
      if (routeData.data) {
        this.lists = routeData.data.data;
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
    } else this.dataError = 'Unexpected Error!';
  }

  pageChange(pageNo: number) {
    this.router.navigate(['lists'], {
      preserveFragment: true,
      queryParams: { page: pageNo },
      queryParamsHandling: 'merge',
    });
  }
}
