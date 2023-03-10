import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSocialScoreComponent } from './profile-social-score.component';

describe('ProfileSocialScoreComponent', () => {
  let component: ProfileSocialScoreComponent;
  let fixture: ComponentFixture<ProfileSocialScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSocialScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSocialScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
