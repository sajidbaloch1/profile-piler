import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'profile-piler-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  items!: MenuItem[];
  

  ngOnInit() {
    this.items = [
      {
        label: 'Home'
      }
    ]
  }

}
