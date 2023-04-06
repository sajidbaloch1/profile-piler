import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'profile-piler-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  model: any[] = [];
  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        items: [
          {
            label: 'Dashboard', icon: 'fas fa-tachometer-alt',
            routerLink: ['']
          },
          {
            label: 'Curated Lists', icon: 'fas fa-th',
            routerLink: ['/curated-lists']
          },
          {
            label: 'Keywords', icon: 'fas fa-th',
            routerLink: ['/keywords']
          },
          {
            label: 'Tags', icon: 'fas fa-th',
            routerLink: ['/tags']
          },
          {
            label: 'Search Logs', icon: 'fas fa-th',
            routerLink: ['/search-logs']
          },
          {
            label: 'Jobs', icon: 'fas fa-th',
            routerLink: ['/jobs']
          },
          {
            label: 'Failed Jobs', icon: 'fas fa-th',
            routerLink: ['/failed-jobs']
          },

        ]
      },

    ];
  }

}
