// src/automobile-usage/automobile-usage.controller.ts

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AutomobileUsageService } from './automobile-usage.service';
import { AutomobileUsage } from './entities/automobile-usage.entity';
import { Prisma } from '@prisma/client';

@Controller('automobile-usage')
export class AutomobileUsageController {
  constructor(
    private readonly automobileUsageService: AutomobileUsageService,
  ) {}

  @Get(':id')
  async getAutomobileUsage(@Param('id') id: string): Promise<AutomobileUsage> {
    return this.automobileUsageService.getAutomobileUsageById(Number(id));
  }

  @Get()
  async getAllAutomobileUsages(): Promise<AutomobileUsage[]> {
    return this.automobileUsageService.getAllAutomobileUsages();
  }

  @Post()
  async createAutomobileUsage(
    @Body() data: Prisma.AutomobileUsageCreateInput,
  ): Promise<AutomobileUsage> {
    return this.automobileUsageService.createAutomobileUsage(data);
  }

  @Put(':id')
  async updateAutomobileUsage(
    @Param('id') id: string,
    @Body() data: AutomobileUsage,
  ): Promise<AutomobileUsage> {
    return this.automobileUsageService.updateAutomobileUsage(Number(id), data);
  }

  @Delete(':id')
  async deleteAutomobileUsage(@Param('id') id: string): Promise<void> {
    return this.automobileUsageService.deleteAutomobileUsage(Number(id));
  }
}
