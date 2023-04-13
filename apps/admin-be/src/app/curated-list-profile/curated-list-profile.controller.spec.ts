import { Test, TestingModule } from '@nestjs/testing';
import { CuratedListProfileController } from './curated-list-profile.controller';

describe('CuratedListProfileController', () => {
  let controller: CuratedListProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuratedListProfileController],
    }).compile();

    controller = module.get<CuratedListProfileController>(CuratedListProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
