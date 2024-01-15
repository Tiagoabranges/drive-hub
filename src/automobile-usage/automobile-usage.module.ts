import { Module } from '@nestjs/common';
import { AutomobileUsageService } from './automobile-usage.service';
import { AutomobileUsageController } from './automobile-usage.controller';

@Module({
  controllers: [AutomobileUsageController],
  providers: [AutomobileUsageService]
})
export class AutomobileUsageModule {}
