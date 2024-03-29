import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDto } from './create-driver.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDriverDto extends PartialType(CreateDriverDto) {
  @IsNotEmpty()
  @IsString()
  readonly name?: string;
}
