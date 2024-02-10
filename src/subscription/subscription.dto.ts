import { Type } from 'class-transformer';
import { IsNumber, IsObject, IsOptional, IsString, MinLength, ValidateNested } from 'class-validator';

class Keys {
  @IsString()
  p256dh: string;

  @IsString()
  auth: string;
}

export class SubscriptionDto {
  @IsString()
  @MinLength(20)
  endpoint: string;

  @IsNumber()
  @IsOptional()
  expirationTime: number;

  @IsObject()
  @ValidateNested()
  @Type(() => Keys)
  keys: Keys;
}
