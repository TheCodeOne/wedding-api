import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsString, IsUUID, MaxLength, MinLength, ValidateNested } from 'class-validator';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export class UpdateGuestsDto {
  @IsUUID()
  @IsNotEmpty()
  readonly uuid: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  @Type(() => Guest)
  readonly guests: Guest[];
}

class Guest {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(40)
  name: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;
}
