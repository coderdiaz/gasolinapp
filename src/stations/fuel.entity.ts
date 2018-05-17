import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fuel {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
