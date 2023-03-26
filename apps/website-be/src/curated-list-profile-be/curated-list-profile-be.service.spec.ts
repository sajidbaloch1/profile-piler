import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListProfileBeService } from './curated-list-profile-be.service';

describe('CuratedListProfileBeService', () => {
  let service: CuratedListProfileBeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuratedListProfileBeService],
    }).compile();

    service = module.get<CuratedListProfileBeService>(CuratedListProfileBeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
