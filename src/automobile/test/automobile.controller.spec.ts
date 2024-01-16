import { Test, TestingModule } from '@nestjs/testing';
import { AutomobileController } from '../automobile.controller';
import { AutomobileService } from '../automobile.service';
import { Automobile } from '../entities/automobile.entity';
import { PrismaService } from '../../prisma.service';

const generateMockAutomobile = (id: number): Automobile => ({
  id,
  brand: 'DefaultBrand',
  color: 'DefaultColor',
  licensePlate: `ABC${id}`,
});

describe('AutomobileController', () => {
  let automobileController: AutomobileController;
  let automobileService: AutomobileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomobileController],
      providers: [AutomobileService, PrismaService],
    }).compile();

    automobileController =
      module.get<AutomobileController>(AutomobileController);
    automobileService = module.get<AutomobileService>(AutomobileService);
  });

  describe('getFilteredAutomobiles', () => {
    it('should return filtered automobiles', async () => {
      const mockAutomobiles: Automobile[] = [generateMockAutomobile(1)];
      jest
        .spyOn(automobileService, 'getFilteredAutomobiles' as any)
        .mockResolvedValue(mockAutomobiles);

      const result = await automobileController.getFilteredAutomobiles(
        'DefaultColor',
        'DefaultBrand',
      );

      expect(result).toEqual(mockAutomobiles);
    });
  });

  describe('getAutomobile', () => {
    it('should return an automobile by ID', async () => {
      const mockAutomobile: Automobile = generateMockAutomobile(1);
      jest
        .spyOn(automobileService, 'getAutomobileById' as any)
        .mockResolvedValue(mockAutomobile);

      const result = await automobileController.getAutomobile('1');

      expect(result).toEqual(mockAutomobile);
    });
  });
});
