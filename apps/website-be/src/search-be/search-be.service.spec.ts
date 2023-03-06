import { Test, TestingModule } from '@nestjs/testing';
import { SearchBeService } from './search-be.service';

describe('SearchBeService', () => {
  let service: SearchBeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchBeService],
    }).compile();

    service = module.get<SearchBeService>(SearchBeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
