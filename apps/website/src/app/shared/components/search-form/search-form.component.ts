import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { initFilters, ListPageFilterModel } from '../../models/filter-model';

@Component({
  selector: 'pp-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Input() showFilters = false;
  filters: ListPageFilterModel = initFilters();

  params = {
    selectedPlatforms: [],
    keyword: "",
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: ListPageFilterModel) => {
      this.filters = { ...initFilters(), ...params };
    });

    this.route.params.subscribe(
      (params: any) => {
        if (params.keyword) {
          this.params.keyword = params.keyword.replace(/-/g, " ");
        }

        if (params.platforms) {
          this.params.selectedPlatforms = params.platforms
            .toLocaleLowerCase()
            .split("-");
        }
      }
    );
  }

  onSearchClkd(){

  }

  updateFilters(filters: any) {
    if (!filters) {
      filters = initFilters();
    }
    this.filters = filters
  }

}
