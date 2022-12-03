import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ListPageFilterModel, initFilters } from "../../models/filter-model";
import { GoogleAnalyticsService } from "../../services/google-analytics.service";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"],
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
    private googleAnalytics: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: ListPageFilterModel) => {
      this.filters = { ...initFilters(), ...params };
    });

    this.route.params.subscribe(
      (params: { keyword: string; platforms: string }) => {
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

  onSearchClkd() {
    let url = "profiles";
    if (this.params.keyword) {
      const cleanedKeyword = this.params.keyword.replace(/\s/g, "-");
      url = `${url}/${cleanedKeyword}`;
      this.googleAnalytics.eventEmitter(
        "search",
        "engagement",
        this.params.keyword
      );
    }

    if (this.params.selectedPlatforms.length > 0) {
      const cleanedPlatform = this.params.selectedPlatforms.join("-");
      url = this.params.keyword
        ? `${url}/${cleanedPlatform}`
        : `${url}/by-platform/${cleanedPlatform}`;
      this.googleAnalytics.eventEmitter(
        "search",
        "engagement",
        cleanedPlatform
      );
    }

    this.router.navigate([url], {
      queryParams: this.filters,
    });
  }

  updateFilters(filters: ListPageFilterModel) {
    if (!filters) {
      filters = initFilters();
    }
    this.filters = filters;
  }
}
