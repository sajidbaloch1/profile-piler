import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFeedItemComponent } from './social-feed-item.component';

describe('SocialFeedItemComponent', () => {
  let component: SocialFeedItemComponent;
  let fixture: ComponentFixture<SocialFeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialFeedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
