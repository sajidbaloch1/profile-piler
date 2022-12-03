import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileSocialScoreComponent } from './profile-social-score.component';

describe('ProfileSocialScoreComponent', () => {
  let component: ProfileSocialScoreComponent;
  let fixture: ComponentFixture<ProfileSocialScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSocialScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSocialScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
