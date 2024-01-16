import { PartialType } from '@nestjs/mapped-types';
import { CreateAutomobileDto } from './create-automobile.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAutomobileDto extends PartialType(CreateAutomobileDto) {
  @IsNotEmpty()
  @IsString()
  readonly licensePlate: string;

  @IsNotEmpty()
  @IsString()
  readonly color: string;

  @IsNotEmpty()
  @IsString()
  readonly brand: string;
}
