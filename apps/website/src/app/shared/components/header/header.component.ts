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
        routerLink: 'search-profiles',
      },
      {
        label: 'Curated Lists',
        routerLink: 'lists'
      },
      {
        label: 'Stats',
        routerLink: 'search-profiles/network'
      },
      
    ];
  }
}
