import { Test, TestingModule } from '@nestjs/testing';
import { AutomobileController } from './automobile.controller';
import { AutomobileService } from './automobile.service';

describe('AutomobileController', () => {
  let controller: AutomobileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomobileController],
      providers: [AutomobileService],
    }).compile();

    controller = module.get<AutomobileController>(AutomobileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
