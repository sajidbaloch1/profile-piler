import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ListPageFilterModel } from '../../../models';
import { initFilters } from '../../../models/filter-model';
@Component({
  selector: 'app-youtube-filters',
  templateUrl: './youtube-filters.component.html',
  styleUrls: ['./youtube-filters.component.css'],
})
export class YoutubeFiltersComponent {
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
