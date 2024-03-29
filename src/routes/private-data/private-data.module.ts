import { Module } from '@nestjs/common';
import { PrivateDataController } from './private-data.controller';
import { GuestsService } from 'src/routes/guests/guests.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Guests, GuestsSchema } from 'src/routes/guests/guests.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Guests.name, schema: GuestsSchema }])],
  controllers: [PrivateDataController],
  providers: [GuestsService],
})
export class PrivateDataModule {}
