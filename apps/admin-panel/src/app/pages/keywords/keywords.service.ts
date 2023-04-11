import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AdminApiService } from "../../shared/api/admin-api.service";
import { Observable } from "rxjs";
export interface keywordsItem {
    id: number;
    resultsCount: number;
    scannedAt: Date;
    keyword: string;
    source: string;
    category: string;
}
@Injectable({
    providedIn: 'root'
})
export class keywordsService {
    products: keywordsItem[] = [];
    constructor(private router: Router, private api: AdminApiService) { }

    createProduct(product: keywordsItem) {
        return this.api.post('keywords', product);
    }

    getProducts(): Observable<keywordsItem[]> {
        return this.api.get<keywordsItem[]>('keywords');
    }

    deleteProduct(id: number) {
        return this.api.delete(id, 'keywords');
    }

    editProduct(product: keywordsItem, id: number) {
        return this.api.patch(id, 'keywords', product);
    }
}