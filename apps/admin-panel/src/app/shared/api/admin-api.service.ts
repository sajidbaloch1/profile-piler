import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ICuratedListItem } from '../../pages/curated-list/curated-list.service';

@Injectable({
  providedIn: 'root',
})
export class AdminApiService {
  constructor(private http: HttpClient) {}

  public get<T>(uri: string, data?: any): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${uri}`, {
      params: data,
    });
  }

  public post(uri: string, data: any) {
    // console.log(`${environment.apiUrl}${uri}`);
    return this.http.post(`${environment.apiUrl}${uri}`, data);
  }

  public patch(id: number, uri: string, data: any) {
    // console.log(`${environment.apiUrl}${uri}`);
    return this.http.put(`${environment.apiUrl}${uri}/${id}`, data);
  }

  public delete(id: number, uri: string) {
    // console.log(`${environment.apiUrl}${uri}`);
    return this.http.delete(`${environment.apiUrl}${uri}/${id}`);
  }
  isActive(is_active: boolean, id: number): Observable<ICuratedListItem> {
    
    return this.http.patch<ICuratedListItem>(
      `${environment.apiUrl}curated-lists/${id}`,
      { is_active }
    );
  }
}
