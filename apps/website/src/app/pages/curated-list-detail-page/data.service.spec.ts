import { TestBed } from '@angular/core/testing';

import { CuratedListDataService } from './data.service';

describe('DataService', () => {
  let service: CuratedListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuratedListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
