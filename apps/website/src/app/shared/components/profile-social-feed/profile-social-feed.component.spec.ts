import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileSocialFeedComponent } from './profile-social-feed.component';

describe('ProfileSocialFeedComponent', () => {
  let component: ProfileSocialFeedComponent;
  let fixture: ComponentFixture<ProfileSocialFeedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSocialFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSocialFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
