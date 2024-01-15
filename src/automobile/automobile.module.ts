import { Module } from '@nestjs/common';
import { AutomobileService } from './automobile.service';
import { AutomobileController } from './automobile.controller';

@Module({
  controllers: [AutomobileController],
  providers: [AutomobileService],
})
export class AutomobileModule {}
