import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SocialFeedItemComponent } from './social-feed-item.component';

describe('SocialFeedItemComponent', () => {
  let component: SocialFeedItemComponent;
  let fixture: ComponentFixture<SocialFeedItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFeedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
