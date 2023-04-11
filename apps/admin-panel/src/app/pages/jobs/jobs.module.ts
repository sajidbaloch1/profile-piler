import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { jobsService } from './jobs.service';
import { PaginatorModule } from 'primeng/paginator';




@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    BreadcrumbModule,
    JobsRoutingModule,
    PaginatorModule
  ],
  providers: [jobsService]

})
export class JobsModule { }
