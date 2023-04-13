import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { CuratedListService, ICuratedListItem } from '../curated-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-piler-curated-list-create',
  templateUrl: './curated-list-create.component.html',
  styleUrls: ['./curated-list-create.component.css']
})
export class CuratedListCreateComponent implements OnInit {
  items!: MenuItem[];
  curatedListForm!: FormGroup;
  curatedList: ICuratedListItem = { id: 0, title: '', sub_heading: '', seo_url: '', description: '', is_active: false, tags: [] };
  errorMessage = '';

  constructor(
    private curatedListService: CuratedListService,
    private router: Router,
    private fb: FormBuilder
  ) { }

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
  }
  createForm() {
    this.curatedListForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      seo_url: ['', [Validators.maxLength(100), Validators.pattern(/^[a-zA-Z0-9-_]+$/)]],
      sub_heading: ['', Validators.maxLength(100)],
      tags: ['', Validators.maxLength(50)],
      description: ['', Validators.maxLength(500)],
      is_active: [false]
    });
  }
  

  onSubmit() {
    if (this.curatedListForm.invalid) {
      this.errorMessage = 'Please enter valid input';
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
        this.errorMessage = 'Error creating curated list.';
      }
    );
  }
}
