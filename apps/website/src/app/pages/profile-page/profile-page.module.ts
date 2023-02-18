import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { ProfileStateComponent } from './profile-state/profile-state.component';



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileStateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfilePageModule { }
