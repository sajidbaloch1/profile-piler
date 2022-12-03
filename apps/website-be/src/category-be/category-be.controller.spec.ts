import { Test, TestingModule } from '@nestjs/testing';
import { CategoryBeController } from './category-be.controller';

describe('CategoryBeController', () => {
  let controller: CategoryBeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryBeController],
    }).compile();

    controller = module.get<CategoryBeController>(CategoryBeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
