import { PartialType } from '@nestjs/mapped-types';
import { CreateAutomobileUsageDto } from './create-automobile-usage.dto';

export class UpdateAutomobileUsageDto extends PartialType(CreateAutomobileUsageDto) {}
