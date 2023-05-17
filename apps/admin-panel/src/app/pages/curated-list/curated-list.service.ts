import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from '../../shared/api/admin-api.service';
import { Observable } from 'rxjs';

export interface ICuratedListItem {
  id: number;
  title: string;
  sub_heading: string;
  description: string;
  seo_url: string;
  is_active: any;
  tags: any[];
  listTags?: IlistTags[];
}
// export Interface IListTags{
//   id: number;
//   tag_id:number;
//   curated_list: any;
// }

export interface IlistTags {
  id: number;
  tag_id: number;
  curated_list_id: number;
}

@Injectable({
  providedIn: 'root',
})
export class CuratedListService {
  active!: number;
  products: ICuratedListItem[] = [];

  constructor(private router: Router, private api: AdminApiService) {}

  createProduct(product: ICuratedListItem): Observable<Object> {
    return this.api.post('curated-lists', product);
  }

  getProducts(): Observable<ICuratedListItem[]> {
    return this.api.get<ICuratedListItem[]>('curated-lists');
  }

  deleteProduct(id: number) {
    return this.api.delete(id, 'curated-lists');
  }

  editProduct(product: ICuratedListItem, id: number) {
    return this.api.patch(id, 'curated-lists', product);
  }

  async isActive(is_active: boolean, id: number) {
    return await this.api.isActive(is_active, id);
  }
}
