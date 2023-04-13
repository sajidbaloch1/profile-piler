import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListProfileService } from './curated-list-profile.service';

describe('CuratedListProfileService', () => {
  let service: CuratedListProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuratedListProfileService],
    }).compile();

    service = module.get<CuratedListProfileService>(CuratedListProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
