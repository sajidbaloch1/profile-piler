import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationRenderComponent } from './pagination-render.component';

describe('PaginationRenderComponent', () => {
  let component: PaginationRenderComponent;
  let fixture: ComponentFixture<PaginationRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
