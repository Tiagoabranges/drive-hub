import { Module } from '@nestjs/common';
import { AutomobileModule } from './automobile/automobile.module';
import { AutomobileUsageModule } from './automobile-usage/automobile-usage.module';
import { DriverModule } from './driver/driver.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AutomobileModule, AutomobileUsageModule, DriverModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
