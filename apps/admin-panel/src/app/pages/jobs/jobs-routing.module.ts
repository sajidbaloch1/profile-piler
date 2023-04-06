import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { FailedJobsComponent } from "../failed-jobs/failed-jobs.component";
import { JobsComponent } from "./jobs.component";

const routes: Routes = [
    {
        path: '',
        component: JobsComponent
    }

]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class JobsRoutingModule { }