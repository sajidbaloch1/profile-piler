import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import {BreadcrumbModule} from 'primeng/breadcrumb' 
import {InputTextModule} from 'primeng/inputtext'
import {InputTextareaModule} from 'primeng/inputtextarea'
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ]
})
export class ContactUsModule { }
