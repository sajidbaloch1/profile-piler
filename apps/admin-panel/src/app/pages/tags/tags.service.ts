import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AdminApiService } from "../../shared/api/admin-api.service";
import { Observable } from "rxjs";
export interface tagsItem {
    id: number;
    name: string;
}
@Injectable({
    providedIn: 'root'
})
export class tagsService {
    products: tagsItem[] = [];
    constructor(private router: Router, private api: AdminApiService) { }

    createProduct(product: tagsItem) {
        return this.api.post('tags', product);
    }

    getProducts(): Observable<tagsItem[]> {
        return this.api.get<tagsItem[]>('tags');
    }

    deleteProduct(id: number) {
        return this.api.delete(id, 'tags');
    }

    editProduct(product: tagsItem, id: number) {
        return this.api.patch(id, 'tags', product);
    }
}