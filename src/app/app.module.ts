import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationsModule } from 'stations/stations.module';
import { StationsCron } from 'stations/stations.cron';

@Module({
  imports: [StationsModule],
  controllers: [AppController],
  providers: [AppService, StationsCron]
})
export class AppModule {}
