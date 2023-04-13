import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { tagsItem, tagsService } from '../tags.service';

@Component({
  selector: 'profile-piler-tags-create',
  templateUrl: './tags-create.component.html',
  styleUrls: ['./tags-create.component.scss']
})
export class TagsCreateComponent {
  items!: MenuItem[];
  tag: tagsItem = { id: 0, name: '' };
  errorMessage: string = '';
  
  constructor(
    private tagsService: tagsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Tags',
        routerLink: ['/Tags']
      }, {
        label: 'Create'
      }
    ]
  } 

  onSubmit() {
    if (this.tag.name.trim() === '') {
      this.errorMessage = 'Please enter a valid name';
      return;
    }
    
    this.tagsService.createProduct(this.tag).subscribe(
      res => {
        console.log('Tag created successfully.');
        this.router.navigate(['/tags']);
      },
      err => {
        console.log('Error creating tag.');
        this.errorMessage = 'Error creating tag.';
      }
    );
  }
}
