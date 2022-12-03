import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageComponent } from './list-page.component';
import { ListPageRoutingModule } from './list-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ListPageComponent],
  imports: [CommonModule, ListPageRoutingModule, SharedModule],
})
export class ListPageModule {}
