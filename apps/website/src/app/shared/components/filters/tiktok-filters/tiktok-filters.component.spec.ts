import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TiktokFiltersComponent } from './tiktok-filters.component';

describe('TiktokFiltersComponent', () => {
  let component: TiktokFiltersComponent;
  let fixture: ComponentFixture<TiktokFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TiktokFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiktokFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
