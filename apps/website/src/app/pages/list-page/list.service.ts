import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  forkJoin,
  Observable,
  of,
  Subject,
  Subscription,
} from 'rxjs';
import { catchError, map, skip } from 'rxjs/operators';
const COUNT_ENDPOINT = 'profiles/count';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ListPageData } from './data-resolver';
import { SocialEntity } from '../../shared/models/social-entity';
import { AjaxService } from '../../shared/services/ajax.service';
import {
  ListPageFilterModel,
  ProfileSearchResponse,
} from '../../shared/models';
import { initFilters } from '../../shared/models/filter-model';
import { getPlatformName } from '../../shared/utils';

export type IListPageData = ListPageData | { errors: string[] };
export interface ISocialEntityResponseItem {
  [id: string]: SocialEntity;
}
export interface ListPageParams {
  platforms: string;
  totalRecords: number;
  filteredRecordsCount: number;
  pageSize: number;
  query: string;
  q?: string;
  title: string;
  loadingResults: boolean;
  currentPage: number;
  totalSearchTime: number;
  selectedPlatforms: string[];
  sort: string;
}

export interface CountResponse {
  count?: number;
  success: boolean;
  errors: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private $dataStream: BehaviorSubject<IListPageData> = new BehaviorSubject<
    IListPageData
  >(null);
  private $dataLoadingStream: Subject<boolean> = new Subject<boolean>();
  private activeRoute: ActivatedRoute;
  private $socialEntityStream: BehaviorSubject<
    ISocialEntityResponseItem
  > = new BehaviorSubject<ISocialEntityResponseItem>(null);
  private dataSubscription: Subscription;
  private queryParamsSubscription: Subscription;
  private routeParamsSubscription: Subscription;

  get dataStream(): BehaviorSubject<IListPageData> {
    return this.$dataStream;
  }

  get isDataLoading(): Subject<boolean> {
    return this.$dataLoadingStream;
  }

  get socialEntityStream(): BehaviorSubject<ISocialEntityResponseItem> {
    return this.$socialEntityStream;
  }

  constructor(private ajax: AjaxService) {}

  subscribeDataStream(activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
    this.dataSubscription = this.activeRoute.data.subscribe((data) => {
      if (data.data) {
        this.$dataStream.next(data.data);
        this.bulkLoadSocialEntities(data.data);
      } else this.loadAndPublishData();
    });

    this.queryParamsSubscription = this.activeRoute.queryParams
      .pipe(skip(1))
      .subscribe(() => this.loadAndPublishData());

    this.routeParamsSubscription = this.activeRoute.params
      .pipe(skip(1))
      .subscribe(() => {
        if (this.activeRoute.snapshot.data?.data)
          this.$dataStream.next(this.activeRoute.snapshot.data.data);
        else this.loadAndPublishData();
      });
  }

  unsubscribeDataStream() {
    this.queryParamsSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
    this.routeParamsSubscription.unsubscribe();
  }

  loadData(params: ListPageFilterModel): Observable<IListPageData> {
    const totalRecords$ = this.ajax.get<CountResponse>(COUNT_ENDPOINT);

    const filteredCounts$ = this.ajax.get<CountResponse>(
      COUNT_ENDPOINT,
      params
    );

    const profileSearch$ = this.ajax.get<ProfileSearchResponse>(
      'profiles',
      params
    );

    const startTime = new Date();
    return forkJoin([totalRecords$, filteredCounts$, profileSearch$]).pipe(
      map((responses) => {
        const endTime = new Date();
        const totalSearchTimeSeconds =
          (endTime.getTime() - startTime.getTime()) / 1000;

        const countResponse = responses[0];
        const filteredCountRs = responses[1];
        const profileRs = responses[2];

        let serverErrors: string[] = [];
        if (countResponse.success === false) {
          serverErrors = countResponse.errors;
        }

        if (filteredCountRs.success === false) {
          serverErrors = serverErrors.concat(filteredCountRs.errors);
        }

        if (profileRs.success === false) {
          serverErrors = serverErrors.concat(profileRs.errors);
        }

        if (serverErrors.length > 0) {
          return {
            errors: serverErrors,
          };
        }

        return {
          totalCount: countResponse.count,
          filteredCount: filteredCountRs.count,
          profileRs: profileRs,
          filters: params,
          totalSearchTimeSeconds,
        };
      }),
      catchError(() => {
        return of({
          errors: ['Something went wrong while fetching data'],
        });
      })
    );
  }

  buildParams(route: ActivatedRouteSnapshot): ListPageFilterModel {
    const queryParams = route.queryParams;
    const routeParams = route.params;

    const filters = {
      ...initFilters(),
      ...queryParams,
      platforms: routeParams.platforms,
    };

    if (routeParams.keyword) filters.q = routeParams.keyword.replace(/-/g, ' ');
    if (!filters.sort) filters.sort = 'followers';

    const finalFilters = {};
    Object.keys(filters)
      .filter((key) => filters[key])
      .forEach((key) => (finalFilters[key] = filters[key]));
    return finalFilters;
  }

  private async bulkLoadSocialEntities(
    response: IListPageData
  ): Promise<ISocialEntityResponseItem> {
    if ((response as any).errors) {
      return;
    }
    const data = response as ListPageData;
    const profiles: any[] = data.profileRs.profiles.map((p) => {
      return {
        Platform: getPlatformName(p.Platform),
        RelativeURL: p.RelativeURL,
        Id: p.Id,
      };
    });
    const entityResponse = await this.ajax
      .post<ISocialEntityResponseItem>('social-entity/load-bulk', {
        profiles,
      })
      .toPromise();
    this.$socialEntityStream.next(entityResponse);
  }

  private async loadAndPublishData() {
    this.$dataLoadingStream.next(true);
    const params = this.buildParams(this.activeRoute.snapshot);
    const data = await this.loadData(params).toPromise();
    this.bulkLoadSocialEntities(data);
    this.$dataStream.next(data);
    this.$dataLoadingStream.next(false);
  }
}
