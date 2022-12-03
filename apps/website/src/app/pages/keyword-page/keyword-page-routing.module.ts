import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeywordPageComponent } from './keyword-page.component';

const routes: Routes = [{ path: '', component: KeywordPageComponent }];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class KeywordPageRoutingModule {}
