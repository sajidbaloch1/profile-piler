import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedListDetailPageComponent } from './curated-list-detail-page.component';

describe('CuratedListDetailPageComponent', () => {
  let component: CuratedListDetailPageComponent;
  let fixture: ComponentFixture<CuratedListDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratedListDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedListDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
