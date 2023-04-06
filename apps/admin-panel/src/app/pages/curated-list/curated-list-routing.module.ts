import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { CuratedListComponent } from "./curated-list.component";

const routes: Routes = [
  {
    path: '',
    component: CuratedListComponent
  }

]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class CuratedListsRoutingModule{}