import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ListPageFilterModel } from '../../../models';
import { initFilters } from '../../../models/filter-model';

@Component({
  selector: 'app-tiktok-filters',
  templateUrl: './tiktok-filters.component.html',
  styleUrls: ['./tiktok-filters.component.css'],
})
export class TiktokFiltersComponent {
  @Output()
  filtersChange = new EventEmitter<ListPageFilterModel>();

  private filterValue: ListPageFilterModel = initFilters();

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
