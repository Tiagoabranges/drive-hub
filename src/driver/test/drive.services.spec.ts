import { Test, TestingModule } from '@nestjs/testing';
import { DriverService } from '../driver.service';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { UpdateDriverDto } from '../dto/update-driver.dto';
import { PrismaService } from '../../prisma.service';
import { NotFoundException } from '@nestjs/common';
describe('DriverService', () => {
  let driverService: DriverService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DriverService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn(),
              findMany: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    driverService = module.get<DriverService>(DriverService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('getDriverById', () => {
    it('should return a driver by ID', async () => {
      const mockDriver = { id: 1, name: 'John Doe' };
      jest
        .spyOn(prismaService.user, 'findUnique')
        .mockResolvedValue(mockDriver);

      const result = await driverService.getDriverById(1);

      expect(result).toEqual(mockDriver);
    });

    it('should throw NotFoundException if driver with given ID not found', async () => {
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

      await expect(driverService.getDriverById(1)).rejects.toThrowError(
        NotFoundException,
      );
    });
  });

  describe('getFilteredAutomobiles', () => {
    it('should return filtered drivers', async () => {
      const mockDrivers = [{ id: 1, name: 'John Doe' }];
      jest.spyOn(prismaService.user, 'findMany').mockResolvedValue(mockDrivers);

      const result = await driverService.getFilteredAutomobiles({
        name: 'John Doe',
      });

      expect(result).toEqual(mockDrivers);
    });
  });

  describe('getAllDrivers', () => {
    it('should return all drivers', async () => {
      const mockDrivers = [{ id: 1, name: 'John Doe' }];
      jest.spyOn(prismaService.user, 'findMany').mockResolvedValue(mockDrivers);

      const result = await driverService.getAllDrivers();

      expect(result).toEqual(mockDrivers);
    });
  });

  describe('createDriver', () => {
    it('should create a new driver', async () => {
      const createDriverDto: CreateDriverDto = { name: 'John Doe' };
      const mockDriver = { id: 1, name: 'John Doe' };
      jest.spyOn(prismaService.user, 'create').mockResolvedValue(mockDriver);

      const result = await driverService.createDriver(createDriverDto);

      expect(result).toEqual(mockDriver);
    });
  });

  describe('updateDriver', () => {
    it('should update a driver by ID', async () => {
      const updateDriverDto: UpdateDriverDto = { name: 'Jane Doe' };
      const mockDriver = { id: 1, name: 'Jane Doe' };
      jest
        .spyOn(prismaService.user, 'findUnique')
        .mockResolvedValue(mockDriver);
      jest.spyOn(prismaService.user, 'update').mockResolvedValue(mockDriver);

      const result = await driverService.updateDriver(1, updateDriverDto);

      expect(result).toEqual(mockDriver);
    });

    it('should throw NotFoundException if driver with given ID not found', async () => {
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

      await expect(
        driverService.updateDriver(1, {} as UpdateDriverDto),
      ).rejects.toThrowError(NotFoundException);
    });
  });

  it('should throw NotFoundException if driver with given ID not found', async () => {
    jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

    await expect(driverService.deleteDriver(1)).rejects.toThrowError(
      NotFoundException,
    );
  });
});
