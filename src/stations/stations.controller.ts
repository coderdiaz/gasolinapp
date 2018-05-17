import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';
import { StationsRepository } from './stations.repository';

@Controller('stations')
export class StationsController {
  constructor(private readonly repository: StationsRepository) {}

  @Get()
  async findAll(
    @Param('latitude') latitude: string,
    @Param('latitude') longitude: string
  ) {
    return this.repository.findAll(latitude, longitude);
  }
}
