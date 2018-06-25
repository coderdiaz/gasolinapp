import { CronJob } from 'cron';
import { Injectable } from '@nestjs/common';
import { StationsService } from './stations.service';
import { StationsRepository } from './stations.repository';

@Injectable()
export class StationsCron {
  constructor(
    private readonly stationsService: StationsService,
    private readonly stationsRepository: StationsRepository
  ) {}

  start() {
    new CronJob(
      // Runs every day (Monday through Sunday) at 05:30:00 AM.
      '00 30 05 * * 1-7',
      () =>
        async function() {
          let stations = await this.stationsService.loadStations();
          this.stationsRepository.create(stations);
        },
      null,
      true,
      'Europe/Madrid'
    );
  }
}
