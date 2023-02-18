import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkPageComponent } from './network-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: "", component: NetworkPageComponent }]

@NgModule({
  declarations: [
    NetworkPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class NetworkPageModule { }
