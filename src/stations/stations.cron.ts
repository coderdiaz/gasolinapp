import { CronJob } from 'cron';
import { Injectable } from '@nestjs/common';
import { StationsService } from './stations.service';

@Injectable()
export class StationsCron {
  constructor(private readonly stationsService: StationsService) {}

  start() {
    new CronJob(
      // Runs every day (Monday through Sunday) at 05:30:00 AM.
      '00 30 05 * * 1-7',
      () => {
        this.stationsService.loadStations();
      },
      null,
      true,
      'Europe/Madrid'
    );
  }
}
