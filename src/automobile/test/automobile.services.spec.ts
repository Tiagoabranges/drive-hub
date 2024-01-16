import { Test, TestingModule } from '@nestjs/testing';
import { AutomobileService } from '../automobile.service';
import { PrismaService } from '../../prisma.service';
import { Automobile } from '../entities/automobile.entity';
import { CreateAutomobileDto } from '../dto/create-automobile.dto';
import { NotFoundException, ConflictException } from '@nestjs/common';

describe('AutomobileService', () => {
  let automobileService: AutomobileService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AutomobileService,
        {
          provide: PrismaService,
          useValue: {
            automobile: {
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

    automobileService = module.get<AutomobileService>(AutomobileService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('getAutomobileById', () => {
    it('should return an automobile by ID', async () => {
      const mockAutomobile: Automobile = {
        licensePlate: '512aaa',
        id: 1,
        brand: 'Toyota',
        color: 'Blue',
      };
      jest
        .spyOn(prismaService.automobile, 'findUnique')
        .mockResolvedValue(mockAutomobile);

      const result = await automobileService.getAutomobileById(1);

      expect(result).toEqual(mockAutomobile);
    });

    it('should throw NotFoundException if automobile with given ID not found', async () => {
      jest
        .spyOn(prismaService.automobile, 'findUnique')
        .mockResolvedValue(null);

      await expect(automobileService.getAutomobileById(1)).rejects.toThrowError(
        NotFoundException,
      );
    });
  });

  describe('getFilteredAutomobiles', () => {
    it('should return filtered automobiles', async () => {
      const mockAutomobiles: Automobile[] = [
        { id: 1, brand: 'Toyota', color: 'Blue', licensePlate: '512aaa' },
      ];
      jest
        .spyOn(prismaService.automobile, 'findMany')
        .mockResolvedValue(mockAutomobiles);

      const result = await automobileService.getFilteredAutomobiles({
        color: 'Blue',
        brand: 'Toyota',
      });

      expect(result).toEqual(mockAutomobiles);
    });
  });

  describe('getAllAutomobiles', () => {
    it('should return all automobiles', async () => {
      const mockAutomobiles: Automobile[] = [
        { id: 1, brand: 'Toyota', color: 'Blue', licensePlate: '512aaa' },
      ];
      jest
        .spyOn(prismaService.automobile, 'findMany')
        .mockResolvedValue(mockAutomobiles);

      const result = await automobileService.getAllAutomobiles();

      expect(result).toEqual(mockAutomobiles);
    });
  });

  describe('createAutomobile', () => {
    it('should create a new automobile', async () => {
      const createAutomobileDto: CreateAutomobileDto = {
        licensePlate: 'ABC123',
        color: 'Red',
        brand: 'Honda',
      };
      const mockAutomobile: Automobile = { id: 1, ...createAutomobileDto };
      jest
        .spyOn(prismaService.automobile, 'create')
        .mockResolvedValue(mockAutomobile);

      const result = await automobileService.createAutomobile(
        createAutomobileDto,
      );

      expect(result).toEqual(mockAutomobile);
    });

    it('should throw ConflictException if license plate is already in use', async () => {
      jest.spyOn(prismaService.automobile, 'create').mockRejectedValue({
        code: 'P2002',
        meta: { target: ['licensePlate'] },
      });

      await expect(
        automobileService.createAutomobile({
          licensePlate: 'ABC123',
          color: 'Red',
          brand: 'Honda',
        }),
      ).rejects.toThrowError(ConflictException);
    });

    it('should rethrow the error if it is not related to a unique constraint violation', async () => {
      jest
        .spyOn(prismaService.automobile, 'create')
        .mockRejectedValue(new Error('Some error'));

      await expect(
        automobileService.createAutomobile({
          licensePlate: 'ABC123',
          color: 'Red',
          brand: 'Honda',
        }),
      ).rejects.toThrowError('Some error');
    });
  });

  describe('updateAutomobile', () => {
    it('should update an automobile by ID', async () => {
      const updateAutomobileDto: Automobile = {
        id: 1,
        brand: 'Honda',
        color: 'Red',
        licensePlate: '512aaa',
      };
      const mockAutomobile: Automobile = { id: 1, ...updateAutomobileDto };
      jest
        .spyOn(prismaService.automobile, 'findUnique')
        .mockResolvedValue(mockAutomobile);
      jest
        .spyOn(prismaService.automobile, 'update')
        .mockResolvedValue(mockAutomobile);

      const result = await automobileService.updateAutomobile(
        1,
        updateAutomobileDto,
      );

      expect(result).toEqual(mockAutomobile);
    });

    it('should throw NotFoundException if automobile with given ID not found', async () => {
      jest
        .spyOn(prismaService.automobile, 'findUnique')
        .mockResolvedValue(null);

      await expect(
        automobileService.updateAutomobile(1, {} as Automobile),
      ).rejects.toThrowError(NotFoundException);
    });
  });

  describe('deleteAutomobile', () => {
    it('should delete an automobile by ID', async () => {
      const mockAutomobile: Automobile = {
        licensePlate: '512aaa',
        id: 1,
        brand: 'Toyota',
        color: 'Blue',
      };
      jest
        .spyOn(prismaService.automobile, 'findUnique')
        .mockResolvedValue(mockAutomobile);

      const result = await automobileService.deleteAutomobile(1);

      expect(result).toBeUndefined();
    });

    it('should throw NotFoundException if automobile with given ID not found', async () => {
      jest
        .spyOn(prismaService.automobile, 'findUnique')
        .mockResolvedValue(null);

      await expect(automobileService.deleteAutomobile(1)).rejects.toThrowError(
        NotFoundException,
      );
    });
  });
});
