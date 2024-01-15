import { Test, TestingModule } from '@nestjs/testing';
import { AutomobileUsageController } from './automobile-usage.controller';
import { AutomobileUsageService } from './automobile-usage.service';

describe('AutomobileUsageController', () => {
  let controller: AutomobileUsageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomobileUsageController],
      providers: [AutomobileUsageService],
    }).compile();

    controller = module.get<AutomobileUsageController>(AutomobileUsageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
