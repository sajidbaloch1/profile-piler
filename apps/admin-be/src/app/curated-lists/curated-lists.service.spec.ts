import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListsService } from './curated-lists.service';

describe('CuratedListsService', () => {
  let service: CuratedListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuratedListsService],
    }).compile();

    service = module.get<CuratedListsService>(CuratedListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
