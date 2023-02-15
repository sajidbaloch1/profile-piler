import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StyleClass } from 'primeng/styleclass';
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
        routerLink: 'curated-list'
      },
      {
        label: 'Stats',
      },
      
    ];
  }
}
