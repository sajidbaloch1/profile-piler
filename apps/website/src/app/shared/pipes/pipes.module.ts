import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNowPipe } from './form-now.pipe';
import { HighlighterPipe } from './highlighter.pipe';
import { ToFullUrlPipe } from './to-full-url.pipe';
import { ToShortNumberPipe } from './to-short-number.pipe';



@NgModule({
  declarations: [
    FormNowPipe,
    HighlighterPipe,
    ToFullUrlPipe,
    ToShortNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[ToShortNumberPipe,ToFullUrlPipe,HighlighterPipe,FormNowPipe]
})
export class PipesModule { }
