import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsComponent } from './keywords.component';
import { KeywordsRoutingModule } from './keywords-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { keywordsService } from './keywords.service';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KeywordsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    KeywordsRoutingModule,
    TableModule,
    PaginatorModule,
    FormsModule
  ],
  providers: [keywordsService]
})
export class KeywordsModule { }
