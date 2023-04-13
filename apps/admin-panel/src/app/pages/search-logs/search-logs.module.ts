import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLogsComponent } from './search-logs.component';
import { SearchLogRoutingModule } from './search-log-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { searchLogsService } from './search-logs.service';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    SearchLogsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    SearchLogRoutingModule,
    FormsModule,
    TableModule
  ],
  providers: [searchLogsService]
})
export class SearchLogsModule { }
