import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{
      path: '',
      component: LandingPageComponent
    }]),
    SharedModule
  ],
})
export class LandingPageModule {}
