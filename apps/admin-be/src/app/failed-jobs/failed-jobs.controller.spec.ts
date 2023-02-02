import { Test, TestingModule } from '@nestjs/testing';
import { FailedJobsController } from './failed-jobs.controller';

describe('FailedJobsController', () => {
  let controller: FailedJobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FailedJobsController],
    }).compile();

    controller = module.get<FailedJobsController>(FailedJobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
