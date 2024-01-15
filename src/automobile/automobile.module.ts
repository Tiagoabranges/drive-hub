import { Module } from '@nestjs/common';
import { AutomobileService } from './automobile.service';
import { AutomobileController } from './automobile.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AutomobileController],
  providers: [AutomobileService, PrismaService],
})
export class AutomobileModule {}
