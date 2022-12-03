import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CuratedListDetailPageComponent } from './curated-list-detail-page.component';
import { DataResolver } from './data.resolver';
import { CuratedListDataService } from './data.service';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CuratedListDetailPageComponent,
    resolve: { data: DataResolver },
  },
];

@NgModule({
  declarations: [CuratedListDetailPageComponent],
  providers: [CuratedListDataService],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CuratedListDetailPageModule {}
