import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { TagsRoutingModule } from './tags-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { tagsService } from './tags.service';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { TagsCreateComponent } from './tags-create/tags-create.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    TagsComponent,
    TagsCreateComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    TagsRoutingModule,
    TableModule,
    PaginatorModule,
    FormsModule,
    CardModule
  ],
  providers: [tagsService]

})
export class TagsModule { }
