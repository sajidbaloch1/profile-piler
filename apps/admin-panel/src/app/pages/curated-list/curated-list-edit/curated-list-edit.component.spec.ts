import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedListEditComponent } from './curated-list-edit.component';

describe('CuratedListEditComponent', () => {
  let component: CuratedListEditComponent;
  let fixture: ComponentFixture<CuratedListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratedListEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuratedListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
