import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { TagsRoutingModule } from './tags-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    TagsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    TagsRoutingModule
  ]
})
export class TagsModule { }
