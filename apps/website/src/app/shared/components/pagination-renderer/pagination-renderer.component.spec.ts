import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginationRendererComponent } from './pagination-renderer.component';

describe('PaginationRendererComponent', () => {
  let component: PaginationRendererComponent;
  let fixture: ComponentFixture<PaginationRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
