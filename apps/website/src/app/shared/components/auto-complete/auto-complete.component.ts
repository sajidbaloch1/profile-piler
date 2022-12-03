import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
} from "rxjs/operators";
import { AjaxService } from "../../services/ajax.service";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { OperatorFunction } from "rxjs";

@Component({
  selector: "app-auto-complete",
  templateUrl: "./auto-complete.component.html",
  styleUrls: ["./auto-complete.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteComponent),
      multi: true,
    },
  ],
})
export class AutoCompleteComponent implements ControlValueAccessor {
  searching = false;
  searchFailed = false;
  isDisabled = false;
  private _model;

  set model(value: string) {
    this._model = value;
    this.propagateChange(value);
  }

  get model(): string {
    return this._model;
  }

  @Input()
  fileName: string;
  constructor(private ajax: AjaxService) {}

  private searchRemote(term: string) {
    return this.ajax.get<string[]>("auto-complete", {
      q: term,
      fileName: this.fileName,
    });
  }

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this.searchRemote(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );

  propagateChange = (_: string) => {};

  writeValue(value: string): void {
    this.model = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
