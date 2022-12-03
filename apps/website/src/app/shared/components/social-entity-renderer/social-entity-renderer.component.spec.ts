import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SocialEntityRendererComponent } from './social-entity-renderer.component';

describe('SocialEntityRendererComponent', () => {
  let component: SocialEntityRendererComponent;
  let fixture: ComponentFixture<SocialEntityRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialEntityRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialEntityRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
