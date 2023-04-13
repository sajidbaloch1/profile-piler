import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { CuratedListService, ICuratedListItem } from './curated-list.service';
import { Table } from 'primeng/table';
@Component({
  selector: 'profile-piler-curated-list',
  templateUrl: './curated-list.component.html',
  styleUrls: ['./curated-list.component.css']
})
export class CuratedListComponent {
  checked!: boolean
  curatedLists: ICuratedListItem[] = []
  items!: MenuItem[];
  titleFilter: string = '';

  @ViewChild('dt') table!: Table;
  constructor(private curatedService: CuratedListService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Curated Lists'
      }
    ]
    console.log(this.loadProducts())
    this.loadProducts();
  }

  private async loadProducts() {
    // this.curatedLists = [];
    this.curatedService.getProducts().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.curatedLists = res;
          console.log(this.curatedLists)
        }
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        // console.log("complete")
      }
    })
  }
  filterTable() {
    this.table.filter(this.titleFilter, 'title', 'contains');
  }
}
