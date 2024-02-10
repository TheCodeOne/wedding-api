import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestsModule } from './guests/guests.module';
import { PrivateDataModule } from './private-data/private-data.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_STRING), GuestsModule, PrivateDataModule],
})
export class AppModule {}
