import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { failedJobsItem, failedJobsService } from './failed-jobs.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'profile-piler-failed-jobs',
  templateUrl: './failed-jobs.component.html',
  styleUrls: ['./failed-jobs.component.css']
})
export class FailedJobsComponent {
failedJobLists: failedJobsItem[] = []
items!:MenuItem[];
jobsfailedFilter: string = '';

@ViewChild('dt') table!: Table;

constructor(private failedJobsService: failedJobsService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Failed Jobs'
      }
    ]
    this.loadProducts();
  }
  private async loadProducts() {
    this.failedJobsService.getProducts().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.failedJobLists = res;
          console.log(this.failedJobLists)
        }
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log("complete")
      }
    })
  }
  filterTable() {
    this.table.filter(this.jobsfailedFilter, 'connection', 'contains');
  }
}
