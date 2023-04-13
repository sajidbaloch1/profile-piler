import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListTagController } from './curated-list-tag.controller';

describe('CuratedListTagController', () => {
  let controller: CuratedListTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuratedListTagController],
    }).compile();

    controller = module.get<CuratedListTagController>(CuratedListTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
