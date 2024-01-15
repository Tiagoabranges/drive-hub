// src/driver/driver.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
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
