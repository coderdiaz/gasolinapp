import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Fuel } from './fuel.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn() id: number;

  @Column() fuel: Fuel;

  @Column() price: string;
}
