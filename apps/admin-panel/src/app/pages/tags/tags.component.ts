import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { tagsItem, tagsService } from './tags.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'profile-piler-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tagLists: tagsItem[] = []
  items!: MenuItem[];
  tagsFilter: string = '';

  @ViewChild('dt') table!: Table;
  constructor(private tagsService: tagsService) { }

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
    this.loadProducts();
  }

  private async loadProducts() {
    this.tagsService.getProducts().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.tagLists = res;
          console.log(this.tagLists)
        }
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log("complete")
      }
    })
  }
  filterTable() {
    this.table.filter(this.tagsFilter, 'name', 'contains');
  }
}


