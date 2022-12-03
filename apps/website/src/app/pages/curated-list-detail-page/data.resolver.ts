import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TransferStateService } from '../../shared/services/transfer-state.service';
import { CuratedListDataService, ICuratedListItemRs } from './data.service';
const RESULT_KEY = 'CURATED_LIST_DETAIL_PAGE';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<ICuratedListItemRs> {
  constructor(
    private transferStateService: TransferStateService,
    private dataService: CuratedListDataService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICuratedListItemRs> {
    const dataObservable = this.dataService.getListItem(route.params.seo_url);
    return this.transferStateService.fetch<ICuratedListItemRs>(
      RESULT_KEY,
      dataObservable
    );
  }
}
