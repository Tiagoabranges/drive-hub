import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomobileModule } from './automobile/automobile.module';
import { AutomobileUsageModule } from './automobile-usage/automobile-usage.module';
import { DriverModule } from './driver/driver.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AutomobileModule, AutomobileUsageModule, DriverModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
