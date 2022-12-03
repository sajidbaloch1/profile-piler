import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlickrFiltersComponent } from './flickr-filters.component';

describe('FlickrFiltersComponent', () => {
  let component: FlickrFiltersComponent;
  let fixture: ComponentFixture<FlickrFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
