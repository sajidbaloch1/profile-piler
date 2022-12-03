import { Test, TestingModule } from '@nestjs/testing';
import { KeywordBeController } from './keyword-be.controller';

describe('KeywordBeController', () => {
  let controller: KeywordBeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeywordBeController],
    }).compile();

    controller = module.get<KeywordBeController>(KeywordBeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
