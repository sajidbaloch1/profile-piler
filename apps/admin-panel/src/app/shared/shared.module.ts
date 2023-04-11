import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminApiService } from './api/admin-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AdminApiService]
})
export class SharedModule { }
