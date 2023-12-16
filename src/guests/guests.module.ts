import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Guests, GuestsSchema } from './guests.schema';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Guests.name, schema: GuestsSchema }])],
  controllers: [GuestsController],
  providers: [GuestsService],
})
export class GuestsModule {}
