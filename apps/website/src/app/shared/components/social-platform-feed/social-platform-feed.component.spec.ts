import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPlatformFeedComponent } from './social-platform-feed.component';

describe('SocialPlatformFeedComponent', () => {
  let component: SocialPlatformFeedComponent;
  let fixture: ComponentFixture<SocialPlatformFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialPlatformFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialPlatformFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
