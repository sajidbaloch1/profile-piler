import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PinterestFiltersComponent } from './pinterest-filters.component';

describe('PinterestFiltersComponent', () => {
  let component: PinterestFiltersComponent;
  let fixture: ComponentFixture<PinterestFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
