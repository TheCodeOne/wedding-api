import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestsModule } from './guests/guests.module';
import { PrivateDataModule } from './private-data/private-data.module';
import { CodeModule } from './code/code.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 30000,
        limit: 3,
      },
    ]),
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_STRING),
    GuestsModule,
    PrivateDataModule,
    CodeModule,
    SubscriptionModule,
  ],
})
export class AppModule {}
