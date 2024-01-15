import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Automobile } from './entities/automobile.entity';

@Injectable()
export class AutomobileService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAutomobileById(id: number): Promise<Automobile> {
    return this.prismaService.automobile.findUnique({ where: { id } });
  }

  async getAllAutomobiles(): Promise<Automobile[]> {
    return this.prismaService.automobile.findMany();
  }

  async createAutomobile(data: Automobile): Promise<Automobile> {
    return this.prismaService.automobile.create({ data });
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
