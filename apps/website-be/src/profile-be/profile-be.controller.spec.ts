import { Test, TestingModule } from '@nestjs/testing';
import { ProfileBeController } from './profile-be.controller';

describe('ProfileBeController', () => {
  let controller: ProfileBeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileBeController],
    }).compile();

    controller = module.get<ProfileBeController>(ProfileBeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
