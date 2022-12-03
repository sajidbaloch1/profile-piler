import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TransferStateService } from '../../shared/services/transfer-state.service';

import { CategoryResponse, CategoryService } from './category.service';
const RESULT_KEY = 'CATEGORY_LIST';

@Injectable({ providedIn: 'root' })
export class CategoryDataResolver implements Resolve<CategoryResponse> {
  constructor(
    private categoryService: CategoryService,
    private transferStateService: TransferStateService
  ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<CategoryResponse> {
    if (this.transferStateService.has(RESULT_KEY)) {
      const data = this.transferStateService.get<CategoryResponse>(RESULT_KEY);
      this.transferStateService.remove(RESULT_KEY);
      return data;
    }

    const response = await this.categoryService
      .getCategories(route.params.source)
      .toPromise();

    this.transferStateService.set(RESULT_KEY, response);
    return response;
  }
}
