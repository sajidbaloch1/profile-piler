import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { jobsItem, jobsService } from './jobs.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'profile-piler-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobLists: jobsItem[] = []
  items!: MenuItem[];
  queueFilter: string = '';

  @ViewChild('dt') table!: Table;

  constructor(private jobsService: jobsService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Jobs'
      }
    ]
    this.loadProducts();
  }
  private async loadProducts() {
    this.jobsService.getProducts().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.jobLists = res;
          console.log(this.jobLists)
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
    this.table.filter(this.queueFilter, 'available_at', 'contains');
  }
}
