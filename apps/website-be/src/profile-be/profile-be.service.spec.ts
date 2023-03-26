import { Test, TestingModule } from '@nestjs/testing';
import { ProfileBeService } from './profile-be.service';

describe('ProfileBeService', () => {
  let service: ProfileBeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileBeService],
    }).compile();

    service = module.get<ProfileBeService>(ProfileBeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
