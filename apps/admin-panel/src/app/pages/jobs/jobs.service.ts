import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AdminApiService } from "../../shared/api/admin-api.service";
import { Observable } from "rxjs";
export interface jobsItem {
    id: number;
    queue: string;
    payload: string;
    attempts: Date;
    reserved_at: number;
    available_at: number;
    created_at: number;
}
@Injectable({
    providedIn: 'root'
})
export class jobsService {
    products: jobsItem[] = [];
    constructor(private router: Router, private api: AdminApiService) { }

    createProduct(product: jobsItem) {
        return this.api.post('jobs', product);
    }

    getProducts(): Observable<jobsItem[]> {
        return this.api.get<jobsItem[]>('jobs');
    }

    deleteProduct(id: number) {
        return this.api.delete(id, 'jobs');
    }

    editProduct(product: jobsItem, id: number) {
        return this.api.patch(id, 'jobs', product);
    }
}