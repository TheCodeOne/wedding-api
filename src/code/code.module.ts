import { Module } from '@nestjs/common';

import { GuestsService } from 'src/guests/guests.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Guests, GuestsSchema } from 'src/guests/guests.schema';
import { CodeController } from './code.controller';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [MongooseModule.forFeature([{ name: Guests.name, schema: GuestsSchema }])],
  controllers: [CodeController],
  providers: [
    GuestsService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class CodeModule {}
