import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordPageComponent } from './keyword-page.component';
import { KeywordPageRoutingModule } from './keyword-page-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    KeywordPageComponent
  ],
  imports: [
    CommonModule,
    KeywordPageRoutingModule,
    SharedModule
  ]
})
export class KeywordPageModule { }
