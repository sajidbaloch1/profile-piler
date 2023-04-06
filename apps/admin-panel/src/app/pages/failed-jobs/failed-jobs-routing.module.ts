import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { FailedJobsComponent } from "./failed-jobs.component";

const routes: Routes = [
    {
        path: '',
        component: FailedJobsComponent
    }

]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class FailedJobsRoutingModule { }