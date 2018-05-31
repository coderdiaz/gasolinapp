import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { StationsCron } from 'stations/stations.cron';
import { INestApplication } from '@nestjs/common';
import { TypesService } from 'fuels/types.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  startStationsCron(app);
  loadTypes(app);
}

function startStationsCron(app: INestApplication) {
  app.get(StationsCron).start();
}

async function loadTypes(app: INestApplication) {
  await app.get(TypesService).loadTypes();
}

bootstrap();
