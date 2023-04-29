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
  checked!: boolean;
  curatedLists: ICuratedListItem[] = [];
  items!: MenuItem[];
  titleFilter = '';

  @ViewChild('dt', { static: false }) table!: Table;

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
    ];
    this.loadProducts()
    this.loadProducts()
  }

  private loadProducts() {
    this.curatedService.getProducts().subscribe(
      (res: ICuratedListItem[]) => {
        if (res.length > 0) {
          this.curatedLists = res;
        }
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        console.log('complete');
      }
    );
  }

  filterTable() {
    this.table.filter(this.titleFilter, 'title', 'contains');
  }

  toggleClick(curatedListId: number) {
    const selectedList = this.curatedLists.find(list => list.id === curatedListId);
    if (selectedList) {
      selectedList.is_active = !selectedList.is_active;
      this.curatedService.editProduct(selectedList, selectedList.id).subscribe({
        next: (res) => {
          console.log('Successfully updated curated list item:', res);
        },
        error: (err) => {
          console.log('Error updating curated list item:', err);
        }
      });
    }
  }
}
