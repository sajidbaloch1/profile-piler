import { Test, TestingModule } from '@nestjs/testing';
import { KeywordBeService } from './keyword-be.service';

describe('KeywordBeService', () => {
  let service: KeywordBeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeywordBeService],
    }).compile();

    service = module.get<KeywordBeService>(KeywordBeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
