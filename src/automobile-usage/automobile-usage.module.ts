// src/automobile-usage/automobile-usage.module.ts

import { Module } from '@nestjs/common';
import { AutomobileUsageService } from './automobile-usage.service';
import { AutomobileUsageController } from './automobile-usage.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AutomobileUsageController],
  providers: [AutomobileUsageService, PrismaService],
})
export class AutomobileUsageModule {}
