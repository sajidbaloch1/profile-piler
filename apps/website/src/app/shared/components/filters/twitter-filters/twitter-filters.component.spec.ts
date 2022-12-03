import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwitterFiltersComponent } from './twitter-filters.component';

describe('TwitterFiltersComponent', () => {
  let component: TwitterFiltersComponent;
  let fixture: ComponentFixture<TwitterFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
