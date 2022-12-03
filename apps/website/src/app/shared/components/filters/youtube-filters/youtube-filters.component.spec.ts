import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { YoutubeFiltersComponent } from './youtube-filters.component';

describe('YoutubeFiltersComponent', () => {
  let component: YoutubeFiltersComponent;
  let fixture: ComponentFixture<YoutubeFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
