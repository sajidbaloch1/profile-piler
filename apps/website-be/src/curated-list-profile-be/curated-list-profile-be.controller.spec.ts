import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListProfileBeController } from './curated-list-profile-be.controller';

describe('CuratedListProfileBeController', () => {
  let controller: CuratedListProfileBeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuratedListProfileBeController],
    }).compile();

    controller = module.get<CuratedListProfileBeController>(CuratedListProfileBeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
