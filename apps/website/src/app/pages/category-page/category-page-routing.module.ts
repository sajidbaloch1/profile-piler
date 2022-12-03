import { NgModule } from '@angular/core';
import { CategoryPageComponent } from './category-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDataResolver } from './category-data.resolver';

const routes: Routes = [{
  path: '', component: CategoryPageComponent, resolve: {
    data: CategoryDataResolver,
  },
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class CategoryPageRoutingModule { }
