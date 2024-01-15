// src/automobile-usage/automobile-usage.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AutomobileUsage, Prisma } from '@prisma/client';

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
    data: Prisma.AutomobileUsageCreateInput,
  ): Promise<AutomobileUsage> {
    return this.prismaService.automobileUsage.create({ data });
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
