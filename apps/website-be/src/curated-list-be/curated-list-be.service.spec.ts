import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListBeService } from './curated-list-be.service';

describe('CuratedListBeService', () => {
  let service: CuratedListBeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuratedListBeService],
    }).compile();

    service = module.get<CuratedListBeService>(CuratedListBeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
