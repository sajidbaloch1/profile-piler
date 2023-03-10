import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListPageFilterModel } from '../../shared/models/filter-model';
import { ProfileViewModel } from '../../shared/models/profile-view.model';
import { SeoService } from '../../shared/services/seo.service';
import { scrollToEl } from '../../shared/utils';
import { ListPageData } from './data.resolver';
import { IListPageData, ISocialEntityResponseItem, ListService } from './list.service';

@Component({
  selector: 'pp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  searchSubscriptions: Subscription[] = [];

  profiles: ProfileViewModel[] = [];
  filters?: ListPageFilterModel;
  loadingResults?: boolean;
  filteredRecordsCount?: number;
  totalRecords: number = 0;
  pageSize?: number;
  totalSearchTime: any;
  selectedPlatforms: string[] = [];
  currentPage: number = 0;
  sort?: string;
  title!: string;
  platforms?: string;
  query?: string;
  errors?: string[];
  queryParamsSub?: Subscription;
  pathParamsSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: ListService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private seoService: SeoService
  ) {
    this.seoService.setPageMetaData({
      title: "Top Profiles for ",
      keywords: ["instagram", "social media", "profiles"],
    });
  }

  ngOnInit() {
    this.setDefaultSort();
    this.service.subscribeDataStream(this.route);
    this.service.dataStream.subscribe((data) => {
      if (data) this.setData(data);
    });
    this.service.isDataLoading.subscribe(
      (isLoading) => (this.loadingResults = isLoading)
    );

    this.service.socialEntityStream.subscribe((data) => {
      if (data) this.setSocialEntities(data);
    });
  }

  ngOnDestroy(): void {
    this.service.unsubscribeDataStream();
  }

  onSortChange() {
    this.router.navigate(["."], {
      relativeTo: this.route,
      queryParams: { sort: this.sort },
      queryParamsHandling: "merge",
    });
  }

  onPageChanged(pageNo: any) {
    scrollToEl("top-heading");

    this.router.navigate(["."], {
      relativeTo: this.route,
      queryParams: { page: pageNo },
      queryParamsHandling: "merge",
    });
  }

  updateFilters(filters: ListPageFilterModel) {
    this.filters = filters;
  }

  private setData(response: IListPageData) {
    this.errors = [];
    scrollToEl("top-heading");
    if ((response as any).errors) {
      this.errors = (response as any).errors;
      return;
    }

    const data = response as ListPageData;
    this.filteredRecordsCount = data.filteredCount;
    this.totalRecords = data.totalCount;
    this.pageSize = data.profileRs.pagging.pageSize;
    this.profiles = data.profileRs.profiles;
    this.filters = data.filters;
    this.title = data.filters.q ?? '';
    this.sort = data.filters.sort;
    this.platforms = data.filters.platforms;
    this.totalSearchTime = data.totalSearchTimeSeconds;
    this.seoService.setPageMetaData({
      title: `Top Profiles for: ${this.title}`,
      description: `Top Profiles for: ${this.title}`,
      url: this.route.snapshot.url.toString(),
      keywords: [this.title, "social media", "profiles", "pages"],
    });
    if (this.filters.platforms) {
      this.selectedPlatforms = this.filters.platforms.toLowerCase().split("-");
    }
  }

  private setSocialEntities(resposne: ISocialEntityResponseItem) {
    // attach entities to profiles
    this.profiles.forEach((p) => {
      p.SocialEntity = resposne[p.Id];
    });

    this.cdr.detectChanges();
  }

  private setDefaultSort() {
    if (this.selectedPlatforms.length === 1) {
      switch (this.selectedPlatforms[0]) {
        case "facebook":
          this.sort = "likescount";
          break;
        case "flickr":
          this.sort = "photoviewscount";
          break;
      }
    }
  }
}
