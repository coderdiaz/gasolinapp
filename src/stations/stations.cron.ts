import { CronJob } from 'cron';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StationsCron {
  cron: CronJob;

  start() {
    this.cron = new CronJob(
      // '00 30 05 * * 1-7',
      '* * * * * *',
      () => {
        /*
          * Runs every weekday (Monday through Sunday)
          * at 05:30:00 AM. 
          */
        console.log('You will see this message every second');
      },
      null,
      false,
      'America/Los_Angeles'
    );

    this.cron.start();
  }
}
