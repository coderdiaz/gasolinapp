import { StationsMapper } from './stations.mapper';
import { Station } from './stations.entity';

describe('StationsMapper', () => {
  const mapper: StationsMapper = new StationsMapper();

  describe('toStations', () => {
    const json = require('./stations.json');

    it('should return an array of stations', () => {
      const stations = mapper.toStations(json);

      expect(stations.length).toBe(5);
    });
  });

  describe('toStation', () => {
    const json = require('./station.json');

    it('should return a station with all the properties mapped', () => {
      const station = mapper.toStation(json);

      expect(station.name).toBe('PREMIRA ENERGIA NORTE, S.L.');
      expect(station.schedule).toBe('L-D: 24H');
      expect(station.postalCode).toBe('01240');
      expect(station.address).toBe('CL MANISITU, 9');
      expect(station.city).toBe('Alegría-Dulantzi');
      expect(station.state).toBe('ÁLAVA');
      expect(station.latitude).toBe('42,846028');
      expect(station.longitude).toBe('-2,509361');
    });
  });
});
