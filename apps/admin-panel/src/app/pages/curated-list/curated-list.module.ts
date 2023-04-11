import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuratedListComponent } from './curated-list.component';
import { CuratedListsRoutingModule } from './curated-list-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CuratedListService } from './curated-list.service';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    CuratedListComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CuratedListsRoutingModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    PaginatorModule
  ],
  providers: [CuratedListService]
})
export class CuratedListModule { }
