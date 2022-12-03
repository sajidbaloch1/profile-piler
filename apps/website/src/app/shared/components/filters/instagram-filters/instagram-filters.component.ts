import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ListPageFilterModel } from '../../../models';
import { initFilters } from '../../../models/filter-model';

@Component({
  selector: 'app-instagram-filters',
  templateUrl: './instagram-filters.component.html',
  styleUrls: ['./instagram-filters.component.css'],
})
export class InstagramFiltersComponent {
  @Output()
  filtersChange = new EventEmitter<ListPageFilterModel>();

  private filterValue: ListPageFilterModel = initFilters();

  categories = [
    {
      name: 'Auto Dealers',
      resultsCount: 51418,
    },
    {
      name: 'Business & Utility Services',
      resultsCount: 124597,
    },
    {
      name: 'Content & Apps',
      resultsCount: 55807,
    },
    {
      name: 'Creators & Celebrities',
      resultsCount: 2273755,
    },
    {
      name: 'Entities',
      resultsCount: 4555,
    },
    {
      name: 'Food & Personal Goods',
      resultsCount: 63029,
    },
    {
      name: 'General Interest',
      resultsCount: 465605,
    },
    {
      name: 'Geography',
      resultsCount: 1176,
    },
    {
      name: 'Government Agencies',
      resultsCount: 15711,
    },
    {
      name: 'Grocery & Convenience Stores',
      resultsCount: 67111,
    },
    {
      name: 'Home & Auto',
      resultsCount: 2909,
    },
    {
      name: 'Home Goods Stores',
      resultsCount: 77412,
    },
    {
      name: 'Home Services',
      resultsCount: 269599,
    },
    {
      name: 'Lifestyle Services',
      resultsCount: 173450,
    },
    {
      name: 'Local Events',
      resultsCount: 138190,
    },
    {
      name: 'Non-Profits & Religious Organizations',
      resultsCount: 141930,
    },
    {
      name: 'Personal Goods & General Merchandise Stores',
      resultsCount: 1021062,
    },
    {
      name: 'Professional Services',
      resultsCount: 179213,
    },
    {
      name: 'Publishers',
      resultsCount: 160572,
    },
    {
      name: 'Restaurants',
      resultsCount: 116378,
    },
    {
      name: 'Transportation & Accomodation Services',
      resultsCount: 65707,
    },
  ];

  constructor() {}
  @Input()
  set filters(filters: ListPageFilterModel) {
    this.filterValue = { ...initFilters(), ...filters };
  }

  get filters(): ListPageFilterModel {
    if (!this.filterValue) {
      return initFilters();
    }
    return this.filterValue;
  }

  changed() {
    this.filtersChange.emit(this.filters);
  }
}
