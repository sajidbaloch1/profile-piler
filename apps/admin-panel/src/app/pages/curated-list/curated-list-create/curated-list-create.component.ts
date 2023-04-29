import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { CuratedListService, ICuratedListItem } from '../curated-list.service';
import { Router } from '@angular/router';
import { tagsItem, tagsService } from '../../tags/tags.service';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'profile-piler-curated-list-create',
  templateUrl: './curated-list-create.component.html',
  styleUrls: ['./curated-list-create.component.css'],
  providers: [MessageService]
})
export class CuratedListCreateComponent implements OnInit {
  items!: MenuItem[];
  tagLists: tagsItem[] = []
  tagOptions: SelectItem[] = [];
  

  curatedListForm!: FormGroup;
  curatedList: ICuratedListItem = { id: 0, title: '', sub_heading: '', seo_url: '', description: '', is_active: false, tags: [] };

  constructor(
    private curatedListService: CuratedListService,
    private router: Router,
    private fb: FormBuilder,
    private tagsService: tagsService,
    private messageService: MessageService,
  ) { };


  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Curated Lists',
        routerLink: ['/curated-lists']
      }, {
        label: 'Curate Lists'
      }
    ];

    this.createForm();
    this.loadProducts();
  }

  private async loadProducts() {
    this.tagsService.getProducts().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.tagLists = res;
          this.tagOptions = this.tagLists.map((tag) => {
            return {
              label: tag.name,
              value: tag.name,
            };
          });
          console.log(this.tagOptions);
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });    
  }

  createForm() {
    this.curatedListForm = this.fb.group({
      title: ['', Validators.required],
      seo_url: ['', Validators.required],
      sub_heading: ['', Validators.required],
      tags: ['', Validators.required],
      description: ['', Validators.required],
      is_active: [false, Validators.required]
    });
  }

  onSubmit() {
    if (this.curatedListForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please enter valid input' });
      return;
    }

    const curatedList: ICuratedListItem = {
      ...this.curatedListForm.value,
      id: 0
    };

    this.curatedListService.createProduct(curatedList).subscribe(
      res => {
        console.log('Curated list created successfully.');
        this.router.navigate(['/curated-lists']);
      },
      err => {
        console.log('Error creating curated list.');
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error creating curated list.' });
      }
    );
  }
}
