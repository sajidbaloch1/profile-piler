import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TransferStateService } from '../../shared/services/transfer-state.service';

import {
  CuratedListDataService,
  ICuratedListsRs,
} from '../curated-list-detail-page/data.service';
const RESULT_KEY = 'CURATED_LISTS';

@Injectable({
  providedIn: 'root',
})
export class CuratedListPageDataResolver implements Resolve<ICuratedListsRs> {
  constructor(
    private transferStateService: TransferStateService,
    private dataService: CuratedListDataService
  ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<ICuratedListsRs> {
    if (this.transferStateService.has(RESULT_KEY)) {
      const data = this.transferStateService.get<ICuratedListsRs>(RESULT_KEY);
      this.transferStateService.remove(RESULT_KEY);
      return data;
    }

    const response = await this.dataService
      .getLists(route.queryParams)
      .toPromise();
    this.transferStateService.set(RESULT_KEY, response);
    return response;
  }
}
