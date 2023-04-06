import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'profile-piler-failed-jobs',
  templateUrl: './failed-jobs.component.html',
  styleUrls: ['./failed-jobs.component.css']
})
export class FailedJobsComponent {
items!:MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Failed Jobs'
      }
    ]
  }
}
