import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { StationsCron } from 'stations/stations.cron';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await app.get(StationsCron).start();
}
bootstrap();
