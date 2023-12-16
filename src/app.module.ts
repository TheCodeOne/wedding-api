import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestsModule } from './guests/guests.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_STRING), GuestsModule],
})
export class AppModule {}
