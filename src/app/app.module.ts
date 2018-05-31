import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationsModule } from 'stations/stations.module';
import { StationsCron } from 'stations/stations.cron';
import { StationsService } from 'stations/stations.service';
import { TypesModule } from 'types/types.module';

@Module({
  imports: [StationsModule, TypesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
