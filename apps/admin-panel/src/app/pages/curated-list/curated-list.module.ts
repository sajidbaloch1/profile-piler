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
import { CuratedListCreateComponent } from './curated-list-create/curated-list-create.component';
import { CuratedListProfileComponent } from './curated-list-profile/curated-list-profile.component';
import { CuratedListEditComponent } from './curated-list-edit/curated-list-edit.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CuratedListComponent,
    CuratedListCreateComponent,
    CuratedListProfileComponent,
    CuratedListEditComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CuratedListsRoutingModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    CardModule,
    ReactiveFormsModule
  ],
  providers: [CuratedListService]
})
export class CuratedListModule { }
