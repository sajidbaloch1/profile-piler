import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLogsComponent } from './search-logs.component';
import { SearchLogRoutingModule } from './search-log-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    SearchLogsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    SearchLogRoutingModule
  ]
})
export class SearchLogsModule { }
