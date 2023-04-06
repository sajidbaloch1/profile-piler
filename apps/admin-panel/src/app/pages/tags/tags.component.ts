import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'profile-piler-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Tags'
      }
    ]
  }
}
