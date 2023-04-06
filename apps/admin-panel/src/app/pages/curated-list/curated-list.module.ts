import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuratedListComponent } from './curated-list.component';
import { CuratedListsRoutingModule } from './curated-list-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    CuratedListComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    
    CuratedListsRoutingModule
  ]
})
export class CuratedListModule { }
