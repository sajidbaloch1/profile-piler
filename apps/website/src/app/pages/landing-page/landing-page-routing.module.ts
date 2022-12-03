import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent }];

@NgModule({
  // exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class LandingPageRoutingModule {}
