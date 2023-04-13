import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListTagService } from './curated-list-tag.service';

describe('CuratedListTagService', () => {
  let service: CuratedListTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuratedListTagService],
    }).compile();

    service = module.get<CuratedListTagService>(CuratedListTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
