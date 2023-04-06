import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent
    }]),
  ]
})
export class DashboardModule { }
