import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './data.resolver';
import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      data: DataResolver,
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ListPageRoutingModule {}
