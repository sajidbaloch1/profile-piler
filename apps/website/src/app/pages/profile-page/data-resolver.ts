import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { IGetProfileResponse, ProfilePageDataService } from './data.service';
import { TransferStateService } from '../../shared/services/transfer-state.service';

const TRANSFER_STATE_KEY = 'PROFILE_PAGE';

@Injectable({ providedIn: 'root' })
export class ProfilePageDataResolver implements Resolve<IGetProfileResponse> {
  constructor(
    private dataService: ProfilePageDataService,
    private transferState: TransferStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IGetProfileResponse> {
    const dataObservable = this.dataService.getProfile(
      route.params.platform,
      route.params.relativeURL
    );
    return this.transferState.fetch<IGetProfileResponse>(
      TRANSFER_STATE_KEY,
      dataObservable
    );
  }
}
