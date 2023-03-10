import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSocialFeedComponent } from './profile-social-feed.component';

describe('ProfileSocialFeedComponent', () => {
  let component: ProfileSocialFeedComponent;
  let fixture: ComponentFixture<ProfileSocialFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSocialFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSocialFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
