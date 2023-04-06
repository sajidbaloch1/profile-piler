import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'profile-piler-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  items!: MenuItem[];

  products: any[] = [
    {
      code: 1,
      name: "sajid",
      address: "karachi",
      email: "sajid@gmail.com",
      contact: 92308509432,
      class: "Intermediate"
    },
    {
      code: 1,
      name: "sajid",
      address: "karachi",
      email: "sajid@gmail.com",
      contact: 92308509432,
      class: "Intermediate"
    },
    {
      code: 1,
      name: "sajid",
      address: "karachi",
      email: "sajid@gmail.com",
      contact: 92308509432,
      class: "Intermediate"
    },
    {
      code: 1,
      name: "sajid",
      address: "karachi",
      email: "sajid@gmail.com",
      contact: 92308509432,
      class: "Intermediate"
    },
    {
      code: 1,
      name: "sajid",
      address: "karachi",
      email: "sajid@gmail.com",
      contact: 92308509432,
      class: "Intermediate"
    },
  ]

  ngOnInit() {
    console.log(this.products)
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Jobs'
      }
    ]
  }
}
