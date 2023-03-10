import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEntityRenderComponent } from './social-entity-render.component';

describe('SocialEntityRenderComponent', () => {
  let component: SocialEntityRenderComponent;
  let fixture: ComponentFixture<SocialEntityRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialEntityRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialEntityRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
