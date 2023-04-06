import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'profile-piler-curated-list',
  templateUrl: './curated-list.component.html',
  styleUrls: ['./curated-list.component.css']
})
export class CuratedListComponent {
  items!: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Curated Lists'
      }
    ]
  }

}
