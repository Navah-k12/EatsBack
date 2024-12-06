import { Test, TestingModule } from '@nestjs/testing';
import { MysteryboxService } from './mysterybox.service';

describe('MysteryboxService', () => {
  let service: MysteryboxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MysteryboxService],
    }).compile();

    service = module.get<MysteryboxService>(MysteryboxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
