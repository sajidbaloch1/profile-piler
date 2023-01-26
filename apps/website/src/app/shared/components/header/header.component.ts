import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'pp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Search Profiles',
        routerLink: 'search-profile',
      },
      {
        label: 'Curated Lists',
      },
      {
        label: 'Stats',
      }
    ];
  }
}
