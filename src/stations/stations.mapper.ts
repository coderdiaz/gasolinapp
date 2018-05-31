import { Injectable, HttpService } from '@nestjs/common';
import { Station } from './stations.entity';
import { Fuel } from '../types/fuels.entity';
import { stat } from 'fs';
import { Type } from '../types/types.entity';

@Injectable()
export class StationsMapper {
  toStations(json: any): Array<Station> {
    const jsonArray: Array<any> = json['ListaEESSPrecio'];
    return jsonArray.map(json => this.toStation(json));
  }

  toStation(json: any): Station {
    let station: Station = new Station();

    station.name = json['Rótulo'];
    station.schedule = json['Horario'];
    station.postalCode = json['C.P.'];
    station.address = json['Dirección'];
    station.city = json['Municipio'];
    station.state = json['Provincia'];
    station.latitude = json['Latitud'];
    station.longitude = json['Longitud (WGS84)'];

    const fuels: Array<Fuel> = new Array<Fuel>();

    return station;
  }
}
