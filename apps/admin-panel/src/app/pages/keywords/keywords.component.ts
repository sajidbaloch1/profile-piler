import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { keywordsItem, keywordsService } from './keywords.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'profile-piler-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent {
  keywordLists: keywordsItem[] = []
  items!: MenuItem[];
  keywordFilter: string = '';

  @ViewChild('dt') table!: Table;

  constructor(private keywordsService: keywordsService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Keywords'
      }
    ]
    this.loadProducts();
  }

  private async loadProducts() {
    this.keywordsService.getProducts().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.keywordLists = res;
          console.log(this.keywordLists)
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
    this.table.filter(this.keywordFilter, 'id', 'contains');
  }
}
