import { Test, TestingModule } from '@nestjs/testing';
import { MysteryboxController } from './mysterybox.controller';
import { MysteryboxService } from './mysterybox.service';

describe('MysteryboxController', () => {
  let controller: MysteryboxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MysteryboxController],
      providers: [MysteryboxService],
    }).compile();

    controller = module.get<MysteryboxController>(MysteryboxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
