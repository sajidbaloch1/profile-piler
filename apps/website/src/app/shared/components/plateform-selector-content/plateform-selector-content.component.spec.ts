import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformSelectorContentComponent } from './plateform-selector-content.component';

describe('PlateformSelectorContentComponent', () => {
  let component: PlateformSelectorContentComponent;
  let fixture: ComponentFixture<PlateformSelectorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateformSelectorContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateformSelectorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
