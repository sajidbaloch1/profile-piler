import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AjaxService } from '../../shared/services/ajax.service';

export interface ResultModel {
  keywords: KeywordModel[];
  category: string;
}

export interface KeywordModel {
  keyword: string;
  resultsCount: number;
}

export interface CategoryResponse {
  payload: ResultModel[];
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private ajax: AjaxService) {}

  getCategories(source: string): Observable<CategoryResponse> {
    return this.ajax.get<CategoryResponse>('categories', {
      source,
    });
  }
}
