import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { TagsComponent } from "./tags.component";
import { TagsCreateComponent } from "./tags-create/tags-create.component";

const routes: Routes = [
    {
        path: '',
        component: TagsComponent,
    },{
        path:'create',
        component:TagsCreateComponent
      },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class TagsRoutingModule { }