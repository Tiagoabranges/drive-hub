// src/driver/driver.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Driver } from './entities/driver.entity';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}

  async getDriverById(id: number): Promise<Driver> {
    const driver = await this.prisma.user.findUnique({ where: { id } });

    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }

    return driver;
  }
  async getFilteredAutomobiles(filters: { name?: string }): Promise<Driver[]> {
    // Lógica para obter automóveis filtrados com base nos parâmetros
    // Se ambos os filtros forem fornecidos, aplique ambos
    // Se apenas um filtro for fornecido, aplique apenas esse filtro
    // Se nenhum filtro for fornecido, retorne todos os automóveis

    const whereCondition: { name?: string } = {};

    if (filters.name) {
      whereCondition.name = filters.name;
    }

    console.log('Where Condition:', whereCondition);

    return this.prisma.user.findMany({
      where: whereCondition,
    });
  }

  async getAllDrivers(): Promise<Driver[]> {
    return this.prisma.user.findMany();
  }

  async createDriver(data: CreateDriverDto): Promise<Driver> {
    return this.prisma.user.create({ data });
  }

  async updateDriver(id: number, data: UpdateDriverDto): Promise<Driver> {
    const existingDriver = await this.prisma.user.findUnique({ where: { id } });

    if (!existingDriver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }

    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteDriver(id: number): Promise<void> {
    const existingDriver = await this.prisma.user.findUnique({ where: { id } });

    if (!existingDriver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }

    await this.prisma.user.delete({ where: { id } });
  }
}
