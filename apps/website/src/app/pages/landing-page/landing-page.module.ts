import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as path from 'path';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LandingPageComponent
    }])
  ],
})
export class LandingPageModule {}
