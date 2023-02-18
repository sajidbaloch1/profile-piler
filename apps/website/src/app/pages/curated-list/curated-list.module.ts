import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CuratedListComponent } from './curated-list.component';
import { PaginatorModule } from 'primeng/paginator';
import { RouterModule, Routes } from '@angular/router';
import { CuratedListDataService } from '../curated-list-detail-page/data.service';
import { CuratedListPageDataResolver } from './data.resolver';

const routes: Routes = [{ path: "", component: CuratedListComponent, resolve: { data: CuratedListPageDataResolver } }]

@NgModule({
  declarations: [CuratedListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    PaginatorModule
  ],
  providers: [CuratedListDataService]
})
export class CuratedListModule { }
