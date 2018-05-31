import { Module, HttpModule } from '@nestjs/common';
import { StationsRepository } from './stations.repository';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';
import { StationsMapper } from './stations.mapper';
import { StationsCron } from './stations.cron';

@Module({
  imports: [HttpModule],
  controllers: [StationsController],
  providers: [StationsRepository, StationsMapper, StationsService, StationsCron]
})
export class StationsModule {}
