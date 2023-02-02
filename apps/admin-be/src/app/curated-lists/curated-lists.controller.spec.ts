import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListsController } from './curated-lists.controller';

describe('CuratedListsController', () => {
  let controller: CuratedListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuratedListsController],
    }).compile();

    controller = module.get<CuratedListsController>(CuratedListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
