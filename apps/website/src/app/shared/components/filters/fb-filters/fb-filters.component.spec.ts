import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FbFiltersComponent } from './fb-filters.component';

describe('FbFiltersComponent', () => {
  let component: FbFiltersComponent;
  let fixture: ComponentFixture<FbFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FbFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
