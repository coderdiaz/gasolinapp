import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { StationsCron } from 'stations/stations.cron';
import { INestApplication } from '@nestjs/common';
import { TypesService } from 'types/types.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  createTypes(app);
  startStationsCron(app);
}

async function createTypes(app: INestApplication) {
  await app.get(TypesService).createTypes();
}

function startStationsCron(app: INestApplication) {
  app.get(StationsCron).start();
}

bootstrap();
