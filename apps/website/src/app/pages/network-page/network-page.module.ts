import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkPageComponent } from './network-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NetworkPageRoutingModule } from './network-page-routing.module';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
    NetworkPageComponent
  ],
  imports: [
    CommonModule,
    NetworkPageRoutingModule,
    SharedModule,
  ]
})
export class NetworkPageModule { }
