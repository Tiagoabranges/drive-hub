import { PartialType } from '@nestjs/mapped-types';
import { CreateAutomobileUsageDto } from './create-automobile-usage.dto';

export class UpdateAutomobileUsageDto extends PartialType(
  CreateAutomobileUsageDto,
) {
  startDate?: Date;
  endDate?: Date;
  driver?: number;
  automobile?: number;
  reason?: string;
}
