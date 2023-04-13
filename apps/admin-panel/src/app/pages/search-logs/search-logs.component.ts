import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { searchLogsItem, searchLogsService } from './search-logs.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'profile-piler-search-logs',
  templateUrl: './search-logs.component.html',
  styleUrls: ['./search-logs.component.css']
})
export class SearchLogsComponent {
  searchLogsLists: searchLogsItem[] = []
  items!: MenuItem[];
  searchLogsFilter: string = '';

  @ViewChild('dt') table!: Table;
  constructor(private searchLogsService: searchLogsService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Search Logs'
      }
    ], 
    this.loadProducts();
  }
  private async loadProducts() {
    this.searchLogsService.getProducts().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.searchLogsLists = res;
          console.log(this.searchLogsLists)
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
    this.table.filter(this.searchLogsFilter, 'query', 'contains');
  }
}
