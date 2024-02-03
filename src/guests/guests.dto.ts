import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export class UpdateGuestsDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(40)
  plusOne: string;

  @IsBoolean()
  @IsOptional()
  hasPlusOne: boolean;

  @IsBoolean()
  @IsOptional()
  willAttend: boolean;
}
