import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformIconComponent } from './plateform-icon.component';

describe('PlateformIconComponent', () => {
  let component: PlateformIconComponent;
  let fixture: ComponentFixture<PlateformIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateformIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateformIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
