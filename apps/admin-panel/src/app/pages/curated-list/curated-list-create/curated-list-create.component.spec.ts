import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedListCreateComponent } from './curated-list-create.component';

describe('CuratedListCreateComponent', () => {
  let component: CuratedListCreateComponent;
  let fixture: ComponentFixture<CuratedListCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratedListCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuratedListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
