import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'profile-piler-search-logs',
  templateUrl: './search-logs.component.html',
  styleUrls: ['./search-logs.component.css']
})
export class SearchLogsComponent {
  items!: MenuItem[];


  ngOnInit(){
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Search Logs'
      }
    ]
  }
}
