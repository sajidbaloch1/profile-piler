import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListBeController } from './curated-list-be.controller';

describe('CuratedListBeController', () => {
  let controller: CuratedListBeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuratedListBeController],
    }).compile();

    controller = module.get<CuratedListBeController>(CuratedListBeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
