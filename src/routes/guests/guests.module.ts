import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Guests, GuestsSchema } from './guests.schema';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { GuestsAdminController } from './admin/admin.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Guests.name, schema: GuestsSchema }])],
  controllers: [GuestsController, GuestsAdminController],
  providers: [GuestsService],
})
export class GuestsModule {}
