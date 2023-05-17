import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuratedListService, ICuratedListItem } from '../curated-list.service';
import { error } from 'console';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
@Component({
  selector: 'profile-piler-curated-list-edit',
  templateUrl: './curated-list-edit.component.html',
  styleUrls: ['./curated-list-edit.component.css'],
  providers: [MessageService],
})
export class CuratedListEditComponent implements OnInit {
  curatedList!: ICuratedListItem;
  pId = 0;

  curatedListItems: ICuratedListItem[] = [];
  curatedListForm!: FormGroup;
  items!: MenuItem[];
  constructor(
    private activeRoute: ActivatedRoute,
    private curatedService: CuratedListService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.loadData(params['id']);
    });
    this.createForm();
  }

  private loadData(id: number) {
    this.curatedListItems = [];
    this.curatedService.getProducts().subscribe({
      next: (results) => {
        results.filter((p) => {
          if (p.id == id) {
            this.curatedList = p;
            this.pId = id;
          }
        });
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
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
      is_active: [false, Validators.required],
    });
    this.curatedListForm;
  }
  onSubmit() {
    if (this.curatedListForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter valid input',
      });
      return;
    }

    const curatedList: ICuratedListItem = {
      ...this.curatedListForm.value,
      id: 0,
    };
    console.log(curatedList, 'hello');
  }
}
