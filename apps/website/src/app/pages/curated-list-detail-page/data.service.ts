import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IPaginationData } from '../../shared/models/pagination-data';
import { ProfileViewModel } from '../../shared/models/profile-view.model';
import { AjaxService } from '../../shared/services/ajax.service';


export interface ICuratedListItem {
  title: string;
  subTitle: string;
  description: string;
  slug: string;
  profiles?: ProfileViewModel[];
  tags: string[];
}

export interface ICuratedListItemRs {
  data?: ICuratedListItem;
}

export interface ICuratedListsRs {
  data: ICuratedListItem[];
  meta: IPaginationData;
}


@Injectable({
  providedIn: 'root'
})
export class CuratedListDataService {

  constructor(
    private ajax: AjaxService
  ) { }

  getListItem(seoUrl: string): Observable<ICuratedListItemRs> {
    return this.ajax.get<ICuratedListItemRs>(`curated-list/${seoUrl}`);
  }

  getLists(queryParams?: Params): Observable<ICuratedListsRs> {
    return this.ajax.get<ICuratedListsRs>(`curated-lists`, queryParams)
  }
}
