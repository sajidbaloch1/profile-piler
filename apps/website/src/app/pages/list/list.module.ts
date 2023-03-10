import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListPageRoutingModule } from './list-page-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,ListPageRoutingModule,SharedModule
  ]
})
export class ListModule { }
