import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ListPageFilterModel } from '../../../models';
import { initFilters } from '../../../models/filter-model';

@Component({
  selector: 'app-fb-filters',
  templateUrl: './fb-filters.component.html',
  styleUrls: ['./fb-filters.component.css'],
})
export class FbFiltersComponent {
  @Output()
  filtersChange = new EventEmitter<ListPageFilterModel>();

  private filterValue: ListPageFilterModel = initFilters();

  constructor() {}
  @Input()
  set filters(filters: ListPageFilterModel) {
    this.filterValue = { ...initFilters(), ...filters };
  }

  get filters(): ListPageFilterModel {
    return this.filterValue;
  }

  changed() {
    this.filtersChange.emit(this.filters);
  }
}
