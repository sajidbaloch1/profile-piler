import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AdminApiService } from "../../shared/api/admin-api.service";
import { Observable } from "rxjs";
export interface ICuratedListItem {
    id: number;
    Title: string;
    sub_heading: string;
    is_active: boolean;
    Tags: any[]
}
@Injectable({
    providedIn: 'root'
})
export class CuratedListService {
    products: ICuratedListItem[] = [];
    constructor(private router: Router, private api: AdminApiService) { }

    createProduct(product: ICuratedListItem) {
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
}