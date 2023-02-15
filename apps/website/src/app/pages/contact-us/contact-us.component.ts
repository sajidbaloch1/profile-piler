import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'pp-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  items: MenuItem[] = [];

  home: MenuItem = {};


  ngOnInit(){
    this.items = [
      {label: 'Contact US'},

    ]
    this.home = { icon: 'pi pi-home'}
  }

}
