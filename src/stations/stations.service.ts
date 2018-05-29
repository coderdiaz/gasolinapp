import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { StationsMapper } from './stations.mapper';
import { StationsRepository } from './stations.repository';

@Injectable()
export class StationsService {
  url: string = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/';
  config = {
    headers: {
      Accept: 'application/json'
    }
  };

  constructor(
    private readonly httpService: HttpService,
    private readonly stationsMapper: StationsMapper
  ) {}

  async loadStations() {
    try {
      const response = await this.httpService
        .get(this.url, this.config)
        .toPromise();

      const stations = response.data.map(this.stationsMapper.toStations);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
