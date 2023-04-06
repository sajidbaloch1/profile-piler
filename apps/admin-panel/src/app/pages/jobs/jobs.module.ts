import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    BreadcrumbModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
