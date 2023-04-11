import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AdminApiService } from "../../shared/api/admin-api.service";
import { Observable } from "rxjs";
export interface failedJobsItem {
    id: number;
    uuid: string;
    connection: string;
    queue: string;
    payload: string;
    exception: string;
    failed_at: Date;
}
@Injectable({
    providedIn: 'root'
})
export class failedJobsService {
    products: failedJobsItem[] = [];
    constructor(private router: Router, private api: AdminApiService) { }

    createProduct(product: failedJobsItem) {
        return this.api.post('failed-jobs', product);
    }

    getProducts(): Observable<failedJobsItem[]> {
        return this.api.get<failedJobsItem[]>('failed-jobs');
    }

    deleteProduct(id: number) {
        return this.api.delete(id, 'failed-jobs');
    }

    editProduct(product: failedJobsItem, id: number) {
        return this.api.patch(id, 'failed-jobs', product);
    }
}