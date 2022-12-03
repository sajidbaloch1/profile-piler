import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstagramFiltersComponent } from './instagram-filters.component';

describe('InstagramFiltersComponent', () => {
  let component: InstagramFiltersComponent;
  let fixture: ComponentFixture<InstagramFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
