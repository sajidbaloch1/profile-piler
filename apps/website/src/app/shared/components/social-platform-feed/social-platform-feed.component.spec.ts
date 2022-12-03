import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SocialPlatformFeedComponent } from './social-platform-feed.component';

describe('SocialPlatformFeedComponent', () => {
  let component: SocialPlatformFeedComponent;
  let fixture: ComponentFixture<SocialPlatformFeedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialPlatformFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPlatformFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
