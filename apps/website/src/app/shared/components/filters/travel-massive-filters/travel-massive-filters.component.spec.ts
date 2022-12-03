import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TravelMassiveFiltersComponent } from './travel-massive-filters.component';

describe('TravelMassiveFiltersComponent', () => {
  let component: TravelMassiveFiltersComponent;
  let fixture: ComponentFixture<TravelMassiveFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelMassiveFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelMassiveFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
