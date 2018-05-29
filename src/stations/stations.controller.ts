import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';
import { StationsRepository } from './stations.repository';
import { StationsService } from './stations.service';

@Controller('stations')
export class StationsController {
  constructor(
    private readonly repository: StationsRepository,
    private readonly service: StationsService
  ) {}

  @Get()
  async findAll(
    @Param('latitude') latitude: string,
    @Param('latitude') longitude: string
  ) {
    return this.repository.findAll(latitude, longitude);
  }

  @Get('fetch')
  async fetch() {
    await this.service.loadStations();
    return 'stations fetched!';
  }
}
