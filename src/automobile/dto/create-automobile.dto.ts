import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { UniqueLicensePlateValidator } from '../Validators/unique-license-plate';

export class CreateAutomobileDto {
  @IsString()
  @IsNotEmpty()
  @Validate(UniqueLicensePlateValidator, {
    message: 'License plate must be unique.',
  })
  licensePlate: string;

  @IsNotEmpty()
  @IsString()
  readonly color: string;

  @IsNotEmpty()
  @IsString()
  readonly brand: string;
}
