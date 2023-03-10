import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ListPageFilterModel } from '../../shared/models/filter-model';
import { ProfileSearchResponse } from '../../shared/models/profile-search-response';
import { TransferStateService } from '../../shared/services/transfer-state.service';
import { IListPageData, ListService } from './list.service';
export interface ListPageData {
  totalCount: number;
  filteredCount: number;
  profileRs: ProfileSearchResponse;
  filters: ListPageFilterModel;
  totalSearchTimeSeconds: number;
}

const RESULT_KEY = "PROFILE_LIST";

@Injectable({ providedIn: "root" })
export class DataResolver implements Resolve<{}> {
  constructor(
    private service: ListService,
    private transferStateService: TransferStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IListPageData> {
    const params = this.service.buildParams(route);
    const dataObservable = this.service.loadData(params);
    return this.transferStateService.fetch<IListPageData>(
      RESULT_KEY,
      dataObservable
    );
  }
}

