import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListPageFilterModel } from '../../shared/models/filter-model';
import { ProfileSearchResponse } from '../../shared/models/profile-search-response';
import { TransferStateService } from '../../shared/services/transfer-state.service';
import { CuratedListDataService, ICuratedListsRs } from '../curated-list-detail-page/data.service';

const RESULT_KEY = "CURATED_LISTS";
export interface ListPageData {
    totalCount: number;
    filteredCount: number;
    profileRs: ProfileSearchResponse;
    filters: ListPageFilterModel;
    totalSearchTimeSeconds: number
}

@Injectable({ providedIn: "root" })
export class CuratedListPageDataResolver implements Resolve<ICuratedListsRs>{

    constructor(
        private transferStateService: TransferStateService,
        private dataService: CuratedListDataService,
    ) { }

    async resolve(route: ActivatedRouteSnapshot): Promise<ICuratedListsRs> {
        if (this.transferStateService.has(RESULT_KEY)) {
            const data: any = this.transferStateService.get<ICuratedListsRs>(RESULT_KEY);
            this.transferStateService.remove(RESULT_KEY);
            return data;
        }
        const response: any = await this.dataService
            .getLists(route.queryParams)
            .toPromise();
        this.transferStateService.set(RESULT_KEY, response);
        return response;
    }

}