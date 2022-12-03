import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { IListPageData, ListService } from './list.service';
import { ListPageFilterModel } from '../../shared/models/filter-model';
import { ProfileSearchResponse } from '../../shared/models';
import { TransferStateService } from '../../shared/services/transfer-state.service';

export interface ListPageData {
  totalCount: number;
  filteredCount: number;
  profileRs: ProfileSearchResponse;
  filters: ListPageFilterModel;
  totalSearchTimeSeconds: number;
}

const RESULT_KEY = 'PROFILE_LIST';

@Injectable({ providedIn: 'root' })
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
