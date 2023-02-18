import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStateComponent } from './profile-state.component';

describe('ProfileStateComponent', () => {
  let component: ProfileStateComponent;
  let fixture: ComponentFixture<ProfileStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
