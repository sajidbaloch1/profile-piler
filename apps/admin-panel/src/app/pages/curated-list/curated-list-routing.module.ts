import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CuratedListComponent } from './curated-list.component';
import { CuratedListCreateComponent } from './curated-list-create/curated-list-create.component';
import { CuratedListProfileComponent } from './curated-list-profile/curated-list-profile.component';
import { CuratedListEditComponent } from './curated-list-edit/curated-list-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CuratedListComponent,
  },
  {
    path: 'create',
    component: CuratedListCreateComponent,
  },
  {
    path: 'view',
    component: CuratedListProfileComponent,
  },
  {
    path: ':id/edit',
    component: CuratedListEditComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class CuratedListsRoutingModule {}
