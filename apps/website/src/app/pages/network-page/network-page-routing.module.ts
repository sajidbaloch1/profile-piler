import { NgModule } from '@angular/core';
import { NetworkPageComponent } from './network-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: NetworkPageComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class NetworkPageRoutingModule {}
