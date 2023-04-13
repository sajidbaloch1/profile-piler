import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedListProfileComponent } from './curated-list-profile.component';

describe('CuratedListProfileComponent', () => {
  let component: CuratedListProfileComponent;
  let fixture: ComponentFixture<CuratedListProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratedListProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuratedListProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
