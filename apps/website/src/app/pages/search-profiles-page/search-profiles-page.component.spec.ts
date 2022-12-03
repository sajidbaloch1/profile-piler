import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchProfilesPageComponent } from './search-profiles-page.component';

describe('SearchProfilesPageComponent', () => {
  let component: SearchProfilesPageComponent;
  let fixture: ComponentFixture<SearchProfilesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProfilesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProfilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
