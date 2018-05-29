import { Module, HttpModule } from '@nestjs/common';
import { StationsRepository } from './stations.repository';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';
import { StationsMapper } from './stations.mapper';

@Module({
  imports: [HttpModule],
  controllers: [StationsController],
  providers: [StationsRepository, StationsMapper, StationsService]
})
export class StationsModule {}
