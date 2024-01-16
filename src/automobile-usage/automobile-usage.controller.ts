// automobile-usage.controller.ts

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
import { CreateAutomobileUsageDto } from './dto/create-automobile-usage.dto';

@Controller('automobile-usage')
export class AutomobileUsageController {
  constructor(
    private readonly automobileUsageService: AutomobileUsageService,
  ) {}

  @Get('usage')
  async getAllAutomobileUsages(): Promise<AutomobileUsage[]> {
    return this.automobileUsageService.getAllAutomobileUsages();
  }

  @Post('usage')
  async createAutomobileUsage(
    @Body() data: CreateAutomobileUsageDto,
  ): Promise<AutomobileUsage> {
    // Ajuste para não incluir startDate no objeto enviado ao serviço
    return this.automobileUsageService.createAutomobileUsage({
      automobileId: data.automobileId,
      driverId: data.driverId,
      usageReason: data.usageReason,
    });
  }

  @Put('usage/:id/finish')
  async finishAutomobileUsage(
    @Param('id') id: string,
  ): Promise<AutomobileUsage> {
    return this.automobileUsageService.finishAutomobileUsage(Number(id));
  }

  @Delete('usage/:id')
  async deleteAutomobileUsage(@Param('id') id: string): Promise<void> {
    return this.automobileUsageService.deleteAutomobileUsage(Number(id));
  }
}
