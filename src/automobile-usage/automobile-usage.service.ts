// automobile-usage.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AutomobileUsage, Prisma } from '@prisma/client';
import { CreateAutomobileUsageDto } from './dto/create-automobile-usage.dto';

@Injectable()
export class AutomobileUsageService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAutomobileUsageById(id: number): Promise<AutomobileUsage> {
    return this.prismaService.automobileUsage.findUnique({ where: { id } });
  }

  async getAllAutomobileUsages(): Promise<AutomobileUsage[]> {
    return this.prismaService.automobileUsage.findMany();
  }

  async createAutomobileUsage(
    data: CreateAutomobileUsageDto,
  ): Promise<AutomobileUsage> {
    // Verifica se o carro já está em uso por outro motorista
    const isCarInUse = await this.prismaService.automobileUsage.findFirst({
      where: {
        automobileId: data.automobileId,
        endDate: null,
      },
    });

    if (isCarInUse) {
      throw new NotFoundException(
        'The car is already in use by another driver.',
      );
    }

    const prismaData: Prisma.AutomobileUsageCreateInput = {
      startDate: new Date(),
      endDate: null,
      automobile: {
        connect: {
          id: data.automobileId,
        },
      },
      driver: {
        connect: {
          id: data.driverId,
        },
      },
      usageReason: data.usageReason,
    };

    try {
      const result = await this.prismaService.automobileUsage.create({
        data: prismaData,
      });

      return result;
    } catch (error) {
      throw new NotFoundException({
        statusCode: 404,
        message: error.message,
        error: 'Not Found',
      });
    }
  }

  async updateAutomobileUsage(
    id: number,
    data: Prisma.AutomobileUsageUpdateInput,
  ): Promise<AutomobileUsage> {
    const existingUsage = await this.prismaService.automobileUsage.findUnique({
      where: { id },
    });

    if (!existingUsage) {
      throw new NotFoundException(`AutomobileUsage with ID ${id} not found`);
    }

    return this.prismaService.automobileUsage.update({ where: { id }, data });
  }

  async finishAutomobileUsage(id: number): Promise<AutomobileUsage> {
    const existingUsage = await this.prismaService.automobileUsage.findUnique({
      where: { id },
    });

    if (!existingUsage) {
      throw new NotFoundException(`AutomobileUsage with ID ${id} not found`);
    }

    return this.prismaService.automobileUsage.update({
      where: { id },
      data: {
        endDate: new Date(),
      },
    });
  }

  async deleteAutomobileUsage(id: number): Promise<void> {
    const existingUsage = await this.prismaService.automobileUsage.findUnique({
      where: { id },
    });

    if (!existingUsage) {
      throw new NotFoundException(`AutomobileUsage with ID ${id} not found`);
    }

    await this.prismaService.automobileUsage.delete({ where: { id } });
  }
}
