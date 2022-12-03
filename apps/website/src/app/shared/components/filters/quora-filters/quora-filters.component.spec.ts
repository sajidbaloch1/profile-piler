import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuoraFiltersComponent } from './quora-filters.component';

describe('QuoraFiltersComponent', () => {
  let component: QuoraFiltersComponent;
  let fixture: ComponentFixture<QuoraFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoraFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoraFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
