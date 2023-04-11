import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  constructor(private http: HttpClient) { }

  public get<T>(uri: string, data?: any): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${uri}`, {
      params: data
    });
  }

  public post(uri: string, data: any){
    // console.log(`${environment.apiUrl}${uri}`);
    return this.http.post(`${environment.apiUrl}${uri}`, data);
  }

  public patch(id:number,uri: string, data: any){
    // console.log(`${environment.apiUrl}${uri}`);
    return this.http.patch(`${environment.apiUrl}${uri}/${id}`, data);
  }

  public delete(id:number,uri: string){
    // console.log(`${environment.apiUrl}${uri}`);
    return this.http.delete(`${environment.apiUrl}${uri}/${id}`);
  }


}
