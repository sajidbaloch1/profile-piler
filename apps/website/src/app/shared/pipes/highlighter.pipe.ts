import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string, termToHighlight: string): any {
    if (!value || !termToHighlight) {
      return value;
    }
    return value.replace(
      new RegExp(termToHighlight, 'gi'),
      `<span class="highliter">${termToHighlight}</span>`
    );
  }
}
