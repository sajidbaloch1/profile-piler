import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToShortNumberPipe } from './to-short-number.pipe';
import { ToFullUrlPipe } from './to-full-url.pipe';
import { HighlighterPipe } from './highlighter.pipe';
import { FromNowPipe } from './from-now.pipe';

@NgModule({
  declarations: [
    ToShortNumberPipe,
    ToFullUrlPipe,
    HighlighterPipe,
    FromNowPipe,
  ],
  imports: [CommonModule],
  exports: [ToShortNumberPipe, ToFullUrlPipe, HighlighterPipe, FromNowPipe],
})
export class PipesModule {}
