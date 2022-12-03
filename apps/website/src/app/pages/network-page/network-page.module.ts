import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkPageComponent } from './network-page.component';
import { NetworkPageRoutingModule } from './network-page-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [NetworkPageComponent],
  imports: [CommonModule, NetworkPageRoutingModule, SharedModule],
})
export class NetworkPageModule {}
