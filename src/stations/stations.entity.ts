import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Station {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    postalCode: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;
}
