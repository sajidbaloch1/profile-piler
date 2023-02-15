import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,CategoryPageRoutingModule,SharedModule
  ]
  
})
export class CategoryPageModule { }
