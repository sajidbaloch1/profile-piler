import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuratedListDetailPageComponent } from './curated-list-detail-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './data.resolver';
import { SharedModule } from '../../shared/shared.module';
import { CuratedListDataService } from './data.service';

const routes: Routes = [
  {
    path: "",
    component: CuratedListDetailPageComponent,
    resolve: { data: DataResolver },
  },
];

@NgModule({
  declarations: [
    CuratedListDetailPageComponent
  ],
  providers: [CuratedListDataService],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ]
})
export class CuratedListDetailPageModule { }
