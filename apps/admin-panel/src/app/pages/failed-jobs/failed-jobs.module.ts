import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FailedJobsComponent } from './failed-jobs.component';
import { FailedJobsRoutingModule } from './failed-jobs-routing.module';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { failedJobsService } from './failed-jobs.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FailedJobsComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    BreadcrumbModule,
    FailedJobsRoutingModule,
    FormsModule
  ],
  providers: [failedJobsService]

})
export class FailedJobsModule { }
