import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['*', 'http://localhost:4200', 'https://wedding-backend-kokkslat-4c9d2773f2dd.herokuapp.com'], methods: ['GET', 'PATCH'] });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
