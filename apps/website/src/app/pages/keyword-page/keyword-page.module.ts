import { NgModule } from '@angular/core';
import { KeywordPageComponent } from './keyword-page.component';
import { KeywordPageRoutingModule } from './keyword-page-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [KeywordPageComponent],
  imports: [CommonModule, SharedModule, KeywordPageRoutingModule],
})
export class KeywordPageModule {}
