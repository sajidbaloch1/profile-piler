import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CategoryPageService } from './category-page.service';



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule, CategoryPageRoutingModule, SharedModule
  ],
  providers:[CategoryPageService]
})
export class CategoryPageModule { }
