import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Fuel } from './fuel.entity';

@Entity()
export class Station {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() schedule: string;

  @Column() postalCode: string;

  @Column() address: string;

  @Column() city: string;

  @Column() state: string;

  @Column() latitude: string;

  @Column() longitude: string;

  @Column() products: Fuel[];
}
