import { Injectable, HttpService } from '@nestjs/common';
import { StationsMapper } from './stations.mapper';
import { TypesRepository } from 'types/types.repository';
import { Station } from './stations.entity';

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
    private readonly stationsMapper: StationsMapper,
    private readonly typesRepository: TypesRepository
  ) {}

  async loadStations(): Promise<Station> {
    try {
      const response = await this.httpService
        .get(this.url, this.config)
        .toPromise();

      const types = await this.typesRepository.findAll();
      return await response.data.map(json => {
        return this.stationsMapper.toStations(json, types);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
