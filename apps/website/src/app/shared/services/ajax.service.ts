import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/website/src/environments/environment';
import { first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http: HttpClient
  ) { }

  public get<T>(
    endpoint: string,
    params?: any,
    background?: boolean): Observable<T> {
    return this._createPromise('get', endpoint, params, background);
  }

  public post<T>(endpoint: string, body?: any, background?: boolean): Observable<T> {
    return this._createPromise('post', endpoint, body, background)
  }

  public getExternal<T>(endpoint: string, params?: string, background?: boolean) {
    return this._createPromise<T>('get', endpoint, params, background)
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

    return request as any
    // return request;
  }
  private serialize(obj: any) {
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

}
