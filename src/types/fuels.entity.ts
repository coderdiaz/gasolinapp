import { Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Type } from './types.entity';
import { Station } from '../stations/stations.entity';

@Entity()
export class Fuel {
  @PrimaryGeneratedColumn() id: number;

  @Column() price: string;

  @OneToOne(type => Type)
  @JoinColumn()
  type: Type;

  @ManyToOne(type => Station, station => station.fuels)
  station: Station;
}
