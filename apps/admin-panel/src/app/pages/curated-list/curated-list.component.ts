import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CuratedListService, ICuratedListItem } from './curated-list.service';
import { Table } from 'primeng/table';
import { tagsService } from '../tags/tags.service';
import { map } from 'rxjs';

@Component({
  selector: 'profile-piler-curated-list',
  templateUrl: './curated-list.component.html',
  styleUrls: ['./curated-list.component.css'],
})
export class CuratedListComponent {
  [x: string]: any;
  names: any;
  ids: any;
  checked!: boolean;
  curatedLists: ICuratedListItem[] = [];
  items!: MenuItem[];
  titleFilter = '';
  tags: any;
  @ViewChild('dt', { static: false }) table!: Table;

  constructor(
    private curatedService: CuratedListService,
    private tagService: tagsService
  ) {}
  parseIntTagId(tagId: string): number {
    const parsedTagId = parseInt(tagId, 10);
    console.log('Parsed Tag ID:', parsedTagId);
    return parsedTagId;
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/'],
      },
      {
        label: 'Curated Lists',
      },
    ];
    this.loadProducts();
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
    this.tagService.getProducts().subscribe((response) => {
      this.tags = response;
      this.names = [];

      this.curatedLists.forEach((list) => {
        list.listTags?.forEach((taglist) => {
          const matchingTag = this.tags.find(
            (tag: any) => tag.id === taglist.tag_id
          );
          if (matchingTag) {
            this.names.push(matchingTag);
          }
        });
      }); 
      console.log(this.names);
    });
  }
  myFunction(list: any, tags: any) {
    console.log(list, tags);
  }
  filterTable() {
    this.table.filter(this.titleFilter, 'title', 'contains');
  }

  async toggleClick(curatedListId: number) {
    const selectedList = this.curatedLists.find(
      (list) => list.id === curatedListId
    );
    if (selectedList) {
      selectedList.is_active = !selectedList.is_active;
      (
        await this.curatedService.isActive(
          selectedList.is_active,
          selectedList.id
        )
      ).subscribe({
        next: (res: any) => {
          console.log('Successfully updated curated list item:', res);
        },
        error: (err: any) => {
          console.log('Error updating curated list item:', err);
        },
        complete: () => {
          window.location.reload();
        },
      });
    }
  }
}
