// create-automobile-usage.dto.ts

import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateAutomobileUsageDto {
  @IsNotEmpty()
  @IsInt()
  readonly driverId: number;

  @IsNotEmpty()
  @IsInt()
  readonly automobileId: number;

  @IsNotEmpty()
  @IsString()
  readonly usageReason: string;
}
