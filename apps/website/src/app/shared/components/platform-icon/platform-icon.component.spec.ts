import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlatformIconComponent } from './platform-icon.component';

describe('PlatformIconComponent', () => {
  let component: PlatformIconComponent;
  let fixture: ComponentFixture<PlatformIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
