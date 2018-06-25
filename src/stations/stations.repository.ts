import { Injectable } from '@nestjs/common';
import { Station } from './stations.entity';

@Injectable()
export class StationsRepository {
  findAll(latitude: string, longitude: string): Array<Station> {
    return [];
  }

  create(stations: Array<Station>): Array<Station> {
    return [];
  }
}
