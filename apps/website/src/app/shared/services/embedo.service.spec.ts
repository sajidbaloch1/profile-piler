import { TestBed } from '@angular/core/testing';

import { EmbedoService } from './embedo.service';

describe('EmbedoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbedoService = TestBed.get(EmbedoService);
    expect(service).toBeTruthy();
  });
});
