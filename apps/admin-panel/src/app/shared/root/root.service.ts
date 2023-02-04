import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor() { }

  public toggleObservable = new BehaviorSubject<boolean>(false)
  public toggleObserve = this.toggleObservable.asObservable();
}
