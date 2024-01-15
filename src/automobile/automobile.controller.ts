// src/automobile/automobile.controller.ts

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AutomobileService } from './automobile.service';
import { Automobile } from '@prisma/client';

@Controller('automobile')
export class AutomobileController {
  constructor(private readonly automobileService: AutomobileService) {}

  @Get(':id')
  async getAutomobile(@Param('id') id: string): Promise<Automobile> {
    return this.automobileService.getAutomobileById(Number(id));
  }

  @Get()
  async getAllAutomobiles(): Promise<Automobile[]> {
    return this.automobileService.getAllAutomobiles();
  }

  @Post()
  async createAutomobile(@Body() data: Automobile): Promise<Automobile> {
    return this.automobileService.createAutomobile(data);
  }

  @Put(':id')
  async updateAutomobile(
    @Param('id') id: string,
    @Body() data: Automobile,
  ): Promise<Automobile> {
    return this.automobileService.updateAutomobile(Number(id), data);
  }

  @Delete(':id')
  async deleteAutomobile(@Param('id') id: string): Promise<void> {
    return this.automobileService.deleteAutomobile(Number(id));
  }
}
