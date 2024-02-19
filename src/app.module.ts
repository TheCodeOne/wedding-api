import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestsModule } from './routes/guests/guests.module';
import { PrivateDataModule } from './routes/private-data/private-data.module';
import { CodeModule } from './routes/code/code.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { VersionModule } from './routes/version/version.module';
import { isDevMode } from './utils';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 30000,
        limit: 4,
        skipIf: () => isDevMode(),
      },
    ]),
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_STRING),
    GuestsModule,
    PrivateDataModule,
    CodeModule,
    VersionModule,
  ],
})
export class AppModule {}
