import { Entity } from 'typeorm';
import { PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Type {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  @PrimaryColumn() id: number;

  @Column() name: string;
}
