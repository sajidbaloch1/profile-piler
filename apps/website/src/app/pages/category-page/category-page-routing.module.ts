import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryDataResolver } from "./category-data.resolver";
import { CategoryPageComponent } from "./category-page.component";


const routes: Routes = [{
    path: '', component: CategoryPageComponent, resolve: {
        data: CategoryDataResolver
    }
}]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)]
})

export class CategoryPageRoutingModule { }