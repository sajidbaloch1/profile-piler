import { NgModule } from "@angular/core";
import { SearchLogsComponent } from "./search-logs.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: SearchLogsComponent,
    }
]
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class SearchLogRoutingModule{}