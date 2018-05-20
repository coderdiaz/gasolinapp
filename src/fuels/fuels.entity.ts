import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Type } from './type.entity';

@Entity()
export class Fuel {
  @PrimaryGeneratedColumn() id: number;

  @Column() type: Type;

  @Column() price: string;
}
