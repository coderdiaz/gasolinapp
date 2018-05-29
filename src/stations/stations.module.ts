import { Module, HttpModule } from '@nestjs/common';
import { StationsRepository } from './stations.repository';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';

@Module({
  imports: [HttpModule],
  controllers: [StationsController],
  providers: [StationsRepository, StationsService]
})
export class StationsModule {}
