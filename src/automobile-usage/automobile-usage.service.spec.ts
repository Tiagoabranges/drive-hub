import { Test, TestingModule } from '@nestjs/testing';
import { AutomobileUsageService } from './automobile-usage.service';

describe('AutomobileUsageService', () => {
  let service: AutomobileUsageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomobileUsageService],
    }).compile();

    service = module.get<AutomobileUsageService>(AutomobileUsageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
