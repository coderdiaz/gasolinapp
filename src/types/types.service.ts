import { Injectable } from '@nestjs/common';
import { TypesRepository } from './types.repository';
import { Type } from './types.entity';

@Injectable()
export class TypesService {
  constructor(private readonly typesRepository: TypesRepository) {}

  async loadTypes() {
    const types: Array<Type> = new Array<Type>();
    types.push(new Type(2, 'Gasoleo A'));
    types.push(new Type(3, 'Gasoleo B'));
    types.push(new Type(1, 'Biodiesel'));
    types.push(new Type(4, 'Gasolina 95 Protección'));
    types.push(new Type(5, 'Gasolina  98'));
    await this.typesRepository.create(types);
  }
}
