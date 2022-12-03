import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { CuratedListComponent } from "./curated-list.component";
import { CuratedListPageDataResolver } from "./data-resolver";
import { SharedModule } from "../../shared/shared.module";
import { CuratedListDataService } from "../curated-list-detail-page/data.service";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    component: CuratedListComponent,
    resolve: { data: CuratedListPageDataResolver },
  },
];

@NgModule({
  declarations: [CuratedListComponent],
  providers: [CuratedListDataService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbPaginationModule,
  ],
})
export class CuratedListPageModule {}
