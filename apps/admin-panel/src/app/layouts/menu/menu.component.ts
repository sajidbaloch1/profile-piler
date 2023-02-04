import { Component, OnInit } from '@angular/core';
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
        label: 'Home',
        items: [
          {
            label: 'Dashboard', icon: 'pi pi-fw pi-home',
            routerLink: ['/']
          }
        ]
      },

    ];
  }

}
