import { Type } from './types.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypesRepository {
  constructor(private readonly repository: Repository<Type>) {}

  create(type: Type) {
    this.repository.create(type);
  }

  async findAll(): Promise<Array<Type>> {
    return await this.repository.find();
  }
}
