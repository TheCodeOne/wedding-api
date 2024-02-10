import { Module } from '@nestjs/common';

import { GuestsService } from 'src/guests/guests.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Guests, GuestsSchema } from 'src/guests/guests.schema';
import { CodeController } from './code.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Guests.name, schema: GuestsSchema }])],
  controllers: [CodeController],
  providers: [GuestsService],
})
export class CodeModule {}
