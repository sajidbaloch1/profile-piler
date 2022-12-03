/**
 * all of the xhr requests throughout the project are to be fired from this service
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
// import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class AjaxService {
  constructor(private http: HttpClient) {}

  public get<T>(
    endpoint: string,
    params?: any,
    background?: boolean
  ): Observable<T> {
    return this._createPromise('get', endpoint, params, background);
  }

  public post<T>(
    endpoint: string,
    body?: any,
    background?: boolean
  ): Observable<T> {
    return this._createPromise('post', endpoint, body, background);
  }

  public getExternal<T>(
    endpoint: string,
    params?: any,
    background?: boolean
  ): Observable<T> {
    return this._createPromise<T>('get', endpoint, params, background);
  }

  public postExternal(
    endpoint: string,
    body: any,
    background?: boolean
  ): Observable<Object> {
    return this._createPromise('post', endpoint, body, background);
  }

  private _createPromise<T>(
    method: string,
    endpoint: string,
    body: any,
    background?: boolean
  ): Observable<T> {
    let request;
    let url =
      endpoint.indexOf('http') === -1
        ? environment.apiUrl + endpoint
        : endpoint;
    const options: any = {};
    // attach auth token if loggedin
    // if (this.sessionManager.isLoggedin()) {
    //   options.headers = new HttpHeaders().set(
    //     "X-AuthToken",
    //     this.sessionManager.getToken()
    //   );
    // }

    if (method === 'get') {
      url += this.serialize(body);
      request = this.http.get(url, options).pipe(first());
    } else {
      request = this.http.post(url, body, options).pipe(first());
    }

    return request;
  }

  private serialize(obj) {
    if (obj === undefined) {
      return '';
    }
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return '?' + str.join('&');
  }

  // this function is called on browser unload event
  // the best choice would have been navigator.sendBeacon but
  // the reason for using sync ajax instead of navigator.sendBeacon is that sendBeacon does not support
  // custom headers which we require for sending out the auth token
  sendBeacon(endpoint, data) {
    const url =
      endpoint.indexOf('http') === -1
        ? environment.apiUrl + endpoint
        : endpoint;
    const client = new XMLHttpRequest();
    client.open('POST', url, false); // third parameter indicates sync xhr. :(
    // if (this.sessionManager.isLoggedin()) {
    //   client.setRequestHeader("X-AuthToken", this.sessionManager.getToken());
    // }
    client.setRequestHeader('Content-Type', 'application/json');
    client.send(JSON.stringify(data));
  }
}
