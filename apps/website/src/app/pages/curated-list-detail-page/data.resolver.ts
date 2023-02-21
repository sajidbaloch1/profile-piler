import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TransferStateService } from '../../shared/services/transfer-state.service';
import { CuratedListDataService, ICuratedListItemRs } from './data.service';
const RESULT_KEY = "CURATED_LIST_DETAIL_PAGE";
@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<ICuratedListItemRs> {

  constructor(
    private transferStateService: TransferStateService,
    private dataSerice: CuratedListDataService
  ) { }


  resolve(route: ActivatedRouteSnapshot): Observable<ICuratedListItemRs> {
    const dataObservable = this.dataSerice.getListItem(route.params['seo_url']);
    return this.transferStateService.fetch<ICuratedListItemRs>(
      RESULT_KEY,dataObservable
    )
  }
}
