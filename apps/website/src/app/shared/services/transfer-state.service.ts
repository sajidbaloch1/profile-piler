import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import {
  makeStateKey,
  StateKey,
  TransferState,
} from "@angular/platform-browser";
import { environment } from 'apps/website/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferStateService {

  /**
   * The State Keys
   */

  private keys: any = new Map<string, StateKey<string>>();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: any,
    private readonly transferState: TransferState
  ) { }

  fetch<T>(
    key: string,
    observableInput: Observable<T>,
    defaultValue?: any
  ): Observable<T> {
    if (this.has(key)) {
      return of(this.get(key, defaultValue)).pipe(tap(() => this.remove(key)))
    }
    if (!isPlatformServer(this.platformId)) of(null);
    return observableInput.pipe(tap((value) => this.set(key, value)))
  }

  get<T>(key: string, defaultValue?: T | null): T | null {
    if (!this.has(key)) {
      return defaultValue || null;
    }
    return this.transferState.get<any>(this.getStateKey(key), defaultValue);

  }


  has(key: string): boolean {
    return this.transferState.hasKey(this.getStateKey(key));
  }

  remove(key: string): void {
    if (!this.has(key)) {
      return;
    }
    this.transferState.remove(this.getStateKey(key));
  }

  set<T>(key: string, value: any): void {
    if (isPlatformServer(this.platformId)) {
      if (this.has(key)) {
        console.warn(
          `Setting existing value into TransferState using key: '${key}'`
        );
      }
      if (!environment.production) {
        console.log(`Storing TransferState for: '${key}'`);
      }
      this.transferState.set(this.getStateKey(key), value)
    }
  }

  private getStateKey(key: any): StateKey<string> {
    if (this.keys.has(key)) {
      return this.keys.get(key);
    }
    this.keys.set(key, makeStateKey(key));
    return this.keys.get(key)
  }
}
