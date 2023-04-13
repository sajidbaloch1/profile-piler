import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AdminApiService } from "../../shared/api/admin-api.service";
import { Observable } from "rxjs";
export interface searchLogsItem {
    id: number;
    query: string;
    query_time_ms: number;
    timed_out: number;
    failed_shareds_count: number;
    skipped_shared_count: number;
    total_hits: number;
    created_at: Date;
}
@Injectable({
    providedIn: 'root'
})
export class searchLogsService {
    products: searchLogsItem[] = [];
    constructor(private router: Router, private api: AdminApiService) { }

    createProduct(product: searchLogsItem) {
        return this.api.post('search-log', product);
    }

    getProducts(): Observable<searchLogsItem[]> {
        return this.api.get<searchLogsItem[]>('search-log');
    }

    deleteProduct(id: number) {
        return this.api.delete(id, 'search-log');
    }

    editProduct(product: searchLogsItem, id: number) {
        return this.api.patch(id, 'search-log', product);
    }
}