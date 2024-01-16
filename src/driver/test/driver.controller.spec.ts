import { Test, TestingModule } from '@nestjs/testing';
import { DriverController } from '../driver.controller';
import { DriverService } from '../driver.service';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { UpdateDriverDto } from '../dto/update-driver.dto';
import { Driver } from '../entities/driver.entity';

// Importe seu PrismaService aqui
import { PrismaService } from '../../prisma.service';

describe('DriverController', () => {
  let driverController: DriverController;
  let driverService: DriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverController],
      providers: [DriverService, PrismaService],
    }).compile();

    driverController = module.get<DriverController>(DriverController);
    driverService = module.get<DriverService>(DriverService);
  });

  describe('getFilteredAutomobiles', () => {
    it('should return filtered drivers', async () => {
      const mockDrivers: Driver[] = [{ id: 1, name: 'John Doe' }];
      jest
        .spyOn(driverService, 'getFilteredAutomobiles')
        .mockResolvedValue(mockDrivers);

      const result = await driverController.getFilteredAutomobiles('John Doe');

      expect(result).toEqual(mockDrivers);
    });
  });

  describe('getDriver', () => {
    it('should return a driver by ID', async () => {
      const mockDriver: Driver = { id: 1, name: 'John Doe' };
      jest.spyOn(driverService, 'getDriverById').mockResolvedValue(mockDriver);

      const result = await driverController.getDriver('1');

      expect(result).toEqual(mockDriver);
    });
  });

  describe('getAllDrivers', () => {
    it('should return all drivers', async () => {
      const mockDrivers: Driver[] = [{ id: 1, name: 'John Doe' }];
      jest.spyOn(driverService, 'getAllDrivers').mockResolvedValue(mockDrivers);

      const result = await driverController.getAllDrivers();

      expect(result).toEqual(mockDrivers);
    });
  });

  describe('createDriver', () => {
    it('should create a new driver', async () => {
      const createDriverDto: CreateDriverDto = { name: 'John Doe' };
      const mockDriver: Driver = { id: 1, name: 'John Doe' };
      jest.spyOn(driverService, 'createDriver').mockResolvedValue(mockDriver);

      const result = await driverController.createDriver(createDriverDto);

      expect(result).toEqual(mockDriver);
    });
  });

  describe('updateDriver', () => {
    it('should update a driver by ID', async () => {
      const updateDriverDto: UpdateDriverDto = { name: 'Jane Doe' };
      const mockDriver: Driver = { id: 1, name: 'Jane Doe' };
      jest.spyOn(driverService, 'updateDriver').mockResolvedValue(mockDriver);

      const result = await driverController.updateDriver('1', updateDriverDto);

      expect(result).toEqual(mockDriver);
    });
  });

  describe('deleteDriver', () => {
    it('should delete a driver by ID', async () => {
      jest.spyOn(driverService, 'deleteDriver').mockResolvedValue();

      const result = await driverController.deleteDriver('1');

      expect(result).toBeUndefined();
    });
  });
});
