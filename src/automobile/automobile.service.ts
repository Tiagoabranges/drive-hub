import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Automobile } from './entities/automobile.entity';
import { CreateAutomobileDto } from './dto/create-automobile.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AutomobileService {
  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prismaService: PrismaService) {}

  async getAutomobileById(id: number): Promise<Automobile> {
    const automobile = await this.prismaService.automobile.findUnique({
      where: { id },
    });
    if (!automobile) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }

    return automobile;
  }

  async getFilteredAutomobiles(filters: {
    color?: string;
    brand?: string;
  }): Promise<Automobile[]> {
    const whereCondition: Prisma.AutomobileWhereInput = {};

    if (filters.color) {
      whereCondition.color = {
        contains: filters.color,
        mode: 'insensitive',
      };
    }

    if (filters.brand) {
      whereCondition.brand = {
        contains: filters.brand,
        mode: 'insensitive',
      };
    }

    console.log('Where Condition:', whereCondition);

    return this.prismaService.automobile.findMany({
      where: whereCondition,
    });
  }

  async getAllAutomobiles(): Promise<Automobile[]> {
    return this.prismaService.automobile.findMany();
  }

  async createAutomobile(data: CreateAutomobileDto): Promise<Automobile> {
    try {
      return await this.prismaService.automobile.create({
        data: {
          licensePlate: data.licensePlate,
          color: data.color,
          brand: data.brand,
        },
      });
    } catch (error) {
      if (
        error.code === 'P2002' &&
        error.meta?.target?.includes('licensePlate')
      ) {
        throw new ConflictException('License plate already in use');
      }

      throw error;
    }
  }

  async updateAutomobile(id: number, data: Automobile): Promise<Automobile> {
    const existingAutomobile = await this.prismaService.automobile.findUnique({
      where: { id },
    });

    if (!existingAutomobile) {
      throw new NotFoundException(`Automobile with ID ${id} not found`);
    }

    return this.prismaService.automobile.update({ where: { id }, data });
  }

  async deleteAutomobile(id: number): Promise<void> {
    const existingAutomobile = await this.prismaService.automobile.findUnique({
      where: { id },
    });

    if (!existingAutomobile) {
      throw new NotFoundException(`Automobile with ID ${id} not found`);
    }

    await this.prismaService.automobile.delete({ where: { id } });
  }
}
