import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsComponent } from './keywords.component';
import { KeywordsRoutingModule } from './keywords-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    KeywordsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    KeywordsRoutingModule
  ]
})
export class KeywordsModule { }
