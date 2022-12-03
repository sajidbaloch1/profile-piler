import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page.component';
import { DataResolver } from './data-resolver';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
    resolve: {
      data: DataResolver,
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ListPageRoutingModule {}
