import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfilesPageComponent } from './search-profiles-page.component';

describe('SearchProfilesPageComponent', () => {
  let component: SearchProfilesPageComponent;
  let fixture: ComponentFixture<SearchProfilesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProfilesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProfilesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
